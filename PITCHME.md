# 函数式编程

---
- 编程范式
- 函数式编程
- 主要概念
- 优势 & 劣势

---
## 编程范式

编程范式(Programming paradigm) 其实就是计算机编程所使用的方法，是设计程序结构所采用的设计风格。

---
## 编程范式
一种范式可以在不同的语言中实现，一种语言也可以同时支持多种范式。例如 JavaScript 就是一种多范式的语言。

---
## 编程范式
- 命令式编程(Imperative programming)
- 过程式编程(Procedural programming)
- 函数式编程(Functional programming)
- 面向对象编程(Object-oriented programming)
- ...

---
## 函数式编程

函数式编程（functional programming），又称泛函编程，是一种编程范式，它将电脑运算视为数学上的函数计算，并且避免使用程序状态以及易变对象。

---
## 函数式编程
主要思想是把运算过程尽量写成一系列嵌套的函数调用。

![](assets/image/fp.gif)

---
## 主要概念

- 函数是“第一等公民”
- 纯函数（pure function）
- 函数的柯里化（curry）
- 函数组合（compose）
- Point Free

---
## 第一等公民
---?code=src/basic.js&lang=javascript&color=#1E1F21&title=Code Style
@[1-8](greeting 只不过是转了个身然后以相同的参数调用了 hi 函数而已)

---?code=src/stupid.js&lang=javascript&color=#1E1F21&title=Code Style

---?code=src/why-stupid.js&lang=javascript&color=#1E1F21&title=Why
@[1-5](First Step)
@[7-11](Second Step)

---?code=src/blog-controller.js&lang=javascript&color=#1E1F21&title=第一等公民的好处

---
## 纯函数

纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

---?code=src/slice-splice.js&lang=javascript&color=#1E1F21&title=slice or splice

---?code=src/check-age.js&lang=javascript&color=#1E1F21&title=Pure function

在不纯的版本中，checkAge 的结果将取决于 minimum 这个可变变量的值。它取决于系统状态（system state）；因为引入了外部的环境，从而增加了认知负荷（cognitive load）

---
## 优势 & 劣势

---
## 优势
- 更好的状态管理
- 更简单的复用
- 更优雅的组合
- 减少代码量、提高可维护性

---
## 劣势
- 提高成本
- 代码不易读
- 并没有提高性能
