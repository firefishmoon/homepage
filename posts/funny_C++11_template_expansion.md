---
title: 'Funny C++11 Template Expansion'
date: '2023-12-27'
---


C++11标准中增强了模板功能，新特性可变模板参数允许模板定义中包含0到任意个模板参数，“…”省略号表示任意个参数。示例：

```cpp
template<typename... Args>
void printVars(Args... args) {
	((cout << args << ' '),...);
}

printVars(1, 2, 3, 4, 5);  // 1 2 3 4 5
```

template<typename… Args> 表示template接受任意个参数。

((cout << args << ' '),...); 是将参数展开，如果args的个数是N个，则会被以此展开为((cout<<args[0]<<’ ’),(cout<<args[1]<<’ ’),(cout<<args[2]<<’ ’), ……, (cout<<args[N-1]<<’ ’)); 效果则是初始化了一个tuple，每项都会将对应的args打印一次。

上面是一个基本用法，还有更有趣的场景。如：

```cpp
template<class T, class... Args>
T* create(SomeCastableType* args, size_t numArgs)
{
	// Question: How to get INDEX_OF_EXPANSION?
  return new T(static_cast<Args>(args[INDEX_OF_EXPANSION])...);  
}

class Obj {
	public A(int a, int b, int c)
};
int args[] = {1,2,3};
Obj* obj = create<Obj, int, int, int>(args, 3);
// What we need now is 
// new T(static_cast<int>(args[0]), 
// 			static_cast<int>(args[1]), 
//      static_cast<int>(args[2]));
```

create接受一个SomeCastableType的参数列表和参数列表长度，并使用这个参数列表，创建一个T。

假如 SomeCastableType 可以转化为任意类型，唯一的问题就是需要某种方式能推导出列表args的下标(INDEX_OF_EXPANSION)。

答案当然是: 可以通过template来进行推导。

```cpp
template <size_t... Is>
struct IndexSequence {};

template <size_t N, size_t... Is>
struct BuildIndexSequence : BuildIndexSequence<N - 1, N - 1, Is...> {};

template <size_t... Is>
struct BuildIndexSequence<0, Is...> : IndexSequence<Is...> {};

// Let's adapt our create function
template<class T, class... Args, std::size_t... Is>
T* create(SomeCastableType* args, IndexSequence<Is...>)
{
  return new T(static_cast<Args>(args[Is])...);  
}

template<class T, class... Args>
T* create(SomeCastableType* args, size_t numArgs)
{
  return create<T, Args...>(args, BuildIndexSequence<numArgs>);  
}

class Obj {
	public A(int a, int b, int c)
};
int args[] = {1,2,3};
// Now Pefect.
Obj* obj = create<Obj, int, int, int>(args, 3);
```

上面重点是 **通过 BuildIndexSequence<3> 创建了一个 IndexSequence<0,1,2> 序列**。T(static_cast<Args>(args[Is])...); 就被展开成了 T(static_cast<int>(args[0]), static_cast<int>(args[1]), static_cast<int>(args[2]));

相信第一次看到这种代码的同学会相当诧异，BuildIndexSequence 这是什么写法？

翻阅相关资料(《深入应用C++11》)后，这种方式叫 **继承方式展开参数包**，而且书里有个几乎一模一样的例子。模板子类会不停的展开父类，直到遇到特化的终止条件展开过程才结束，而且这一切推导都会在编译期完成，不会占用运行时间。

BuildIndexSequence<3>的展开过程如下：

```cpp
// template <size_t N, size_t... Is>
// struct BuildIndexSequence : BuildIndexSequence<N - 1, N - 1, Is...> {};
struct BuildIndexSequence<3> : BuildIndexSequence<2, 2> {};
BuildIndexSequence<2, 2> : BuildIndexSequence<1, 1, 2> {};
BuildIndexSequence<1, 1, 2> : BuildIndexSequence<0, 0, 1, 2> {};

//template <size_t... Is>
//struct BuildIndexSequence<0, Is...> : IndexSequence<Is...> {};
BuildIndexSequence<0, 0, 1, 2> : IndexSequence<0, 1, 2>
```

而在C++14里，直接提供了一个 std::make_index_sequence 实现该功能。

上述用法可以一窥可变模板参数的功能，事实上C++11的可变模板参数，再配合C++11的type_traits (type_traits提供了丰富的编译期计算、查询、判断、转换和选择的帮助类), 可以在编译期实现大量花里胡哨的功能, 如实现动态语言都有的，但C++本没有的 **反射** 功能。

这里有一个Template的库可以作为参考和学习：

[GitHub - Ubpa/UTemplate](https://github.com/Ubpa/UTemplate)