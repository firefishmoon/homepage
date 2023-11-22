---
title: '[基础]多线程锁'
date: '2023-11-22'
---

作用：用于解决多线程资源同步问题。

### 1. 互斥量(mutex)

操作系统或者clib都有提供，mutex是睡眠等待(sleep waiting)类型的锁, 当线程抢锁失败时，会进入休眠。

优点：节省CPU资源

缺点：休眠唤醒会消耗一点时间

```c
// pthread example
// 声明一个互斥量
pthread_mutex_t mtx;
// 初始化 
pthread_mutex_init(&mtx, NULL);
// 加锁  
pthread_mutex_lock(&mtx);
// 解锁 
pthread_mutex_unlock(&mtx);
// 销毁
pthread_mutex_destroy(&mtx);
```

### 2. 自旋锁(spinlock)

mutex的死循环版本，即线程不会休眠，一直循环等待抢锁。

在特别要求性能时使用。

```c
// 原子操作版本  （from skynet）
struct spinlock {
	atomic_flag_ lock;
};

static inline void
spinlock_init(struct spinlock *lock) {
	atomic_flag_ v = ATOMIC_FLAG_INIT_;
	lock->lock = v;
}

static inline void
spinlock_lock(struct spinlock *lock) {
	while (atomic_flag_test_and_set_(&lock->lock)) {}
}

static inline int
spinlock_trylock(struct spinlock *lock) {
	return atomic_flag_test_and_set_(&lock->lock) == 0;
}

static inline void
spinlock_unlock(struct spinlock *lock) {
	atomic_flag_clear_(&lock->lock);
}

static inline void
spinlock_destroy(struct spinlock *lock) {
	(void) lock;
}
```

### 3. 条件变量(condition variable)

当满足条件时，线程被唤醒，否则一直休眠。

使用场景：生产者/消费者模式

```c
// from skynet
struct message_queue * q = NULL;
	while (!m->quit) {
		q = skynet_context_message_dispatch(sm, q, weight);
		if (q == NULL) {
			if (pthread_mutex_lock(&m->mutex) == 0) {
				++ m->sleep;
				// "spurious wakeup" is harmless,
				// because skynet_context_message_dispatch() can be call at any time.
				if (!m->quit)
					pthread_cond_wait(&m->cond, &m->mutex);
				-- m->sleep;
				if (pthread_mutex_unlock(&m->mutex)) {
					fprintf(stderr, "unlock mutex error");
					exit(1);
				}
			}
		}
	}
```

注意：skynet中不处理“虚假唤醒”([spurious wakeup](https://en.wikipedia.org/wiki/Spurious_wakeup))，而在一般情况下通常需要用while()循环来代替if(!m->quit).

### 4. 读写锁(read-write lock)

对共享资源读多写少的情况下使用。

读写锁的特性：

- 当读写锁被加了写锁时，其他线程对该锁加读锁或者写锁都会**阻塞**（不是失败）。
- 当读写锁被加了读锁时，其他线程对该锁加写锁会**阻塞**，加读锁会成功

```c
// 原子操作版本 from skynet
struct rwlock {
	ATOM_INT write;
	ATOM_INT read;
};

static inline void
rwlock_init(struct rwlock *lock) {
	ATOM_INIT(&lock->write, 0);
	ATOM_INIT(&lock->read, 0);
}

static inline void
rwlock_rlock(struct rwlock *lock) {
	for (;;) {
		while(ATOM_LOAD(&lock->write)) {}
		ATOM_FINC(&lock->read);
		if (ATOM_LOAD(&lock->write)) {
			ATOM_FDEC(&lock->read);
		} else {
			break;
		}
	}
}

static inline void
rwlock_wlock(struct rwlock *lock) {
	while (!ATOM_CAS(&lock->write,0,1)) {}
	while(ATOM_LOAD(&lock->read)) {}
}

static inline void
rwlock_wunlock(struct rwlock *lock) {
	ATOM_STORE(&lock->write, 0);
}

static inline void
rwlock_runlock(struct rwlock *lock) {
	ATOM_FDEC(&lock->read);
}
```