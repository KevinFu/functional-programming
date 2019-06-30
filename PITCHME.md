### Fuctional Programming

---
## Main Content
- Programming paradigms
- Definition
- Key Concepts
- Good & Bad

---?code=src/basic.js&lang=javascript&color=#1E1F21&title=Basic Code Style
@[1-8](greeting 只不过是转了个身然后以相同的参数调用了 hi 函数而已)

---?code=src/stupid.js&lang=javascript&color=#1E1F21&title=Code Style

---?code=src/why-stupid.js&lang=javascript&color=#1E1F21&title=Why
@[1-5](First Step)
@[7-11](Second Step)

---
## Programming paradigms

编程范式(Programming paradigm) 其实就是计算机编程所使用的方法，是设计程序结构所采用的设计风格。

- 命令式编程(Imperative programming)
- 过程式编程(Procedural programming)
- 函数式编程(Functional programming)
- 面向对象编程(Object-oriented programming)
- ...

---
## Definition
Anything that can be derived from the application state, should be derived. Automatically.

![flow](https://mobx.js.org/docs/flow.png)

---
## Key Concepts
- Define state
- Modify state
- Reaction

---
## Good & Bad
- basic: reportChanged + notifyListeners
- autorun: trigger at first time.
- reaction: track expression, don't trigger at first time.
- observe: registerListener
