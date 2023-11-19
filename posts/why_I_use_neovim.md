# 为什么我要使用NeoVim

![VIM UI](https://picss.sunbangyan.cn/2023/11/19/e0d527e776ceb4d47de347761a8bcee1.png "How my nvim looks like")

### NeoVim是什么

NeoVim是一个基于Vim的开源项目编辑器项目，兼容Vim，同时可以采用Lua来进行配置。Vim是Unix系统下一个知名的文本编辑器，其功能强大、
完全可定制，可以通过社区开发的大量插件实现各种不同的功能。

### 为什么使用NeoVim

对于我来说，NeoVim的Lua比原生的VimScript要亲切太多了，同时NeoVim还继承了Vim的一切优点，为何不用它呢？作为一个程序员，
使用NeoVim/Vim还有以下几点好处：

1. 高效：使用快捷键几乎可以进行一切操作，如代码跳转、代码重构、文件查找、运行、调试……。Vim允许你在coding的时候，
手指可以不离开键盘，这能显著提高编码的效率（当然，对效率影响最大的不是手指，而是脑子😂）。
2. 定制化：Vim高度可定制，意味着你可以根据你的喜好和工作流对它进行定制，打造出你独一无二的IDE。
3. 跨平台：Vim是一个跨平台的编辑器，同一份配置，可以在Windows/Linux/Macos上获得相同的体验，不必再忍受不同平台不同IDE带给你不适性。

当然这些好处也有相应的代价，那就是NeoVim/Vim并不是一个即开即用的编辑器，它的学习曲线相当大，新手面对它可能会是一脸茫然（甚至不知道怎么编辑文件和保存文件！），
我也是经历了相当长的入门阶段，才慢慢适应了NeoVim并爱上了它。

### 怎么使用NeoVim

首先要适应下Vim的操作方式，Vim的操作有点像学习一门乐器，需要记忆和大量的练习。光标的移动，复制/粘贴等基本操作都和普通的编辑器不一样。

分享两篇来自CoolShell的Vim攻略：

* [简明 VIM 练级攻略](https://coolshell.cn/articles/5426.html)
* [无插件Vim编程技巧](https://coolshell.cn/articles/11312.html)

适应了基本操作后，就可以开始动手配置了，我主要参考了YouTube上两位大佬的配置，链接如下：

* [How to set up Neovim for coding React, TypeScript, Tailwind CSS, etc on a new M2 MacBook Air](https://www.youtube.com/watch?v=ajmK0ZNcM4Q)
* [C++ Coding with Neovim - Prateek Raman - CppCon 2022](https://www.youtube.com/watch?v=nzRnWUjGJl8)

两位在github上也分享了NeoVim的配置文件，也可以直接clone他们的配置。

目前非常喜欢使用NeoVim的感觉，不敢说有多了解NeoVim，使用过程中也会遇到很多的问题，遇到问题然后去搜索解决方案（Ctrl+c Ctrl+v），不正是coding的乐趣吗？
