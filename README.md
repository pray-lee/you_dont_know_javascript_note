### 编译流程
    词法分析-》语法分析-》代码生成
#### javascript代码执行过程参与进来的东西
    - 引擎：
      从头到尾负责整个javascript程序的编译及执行过程。
    - 编译器：
      引擎的好朋友，负责语法分析及代码生成等脏活累活
    - 作用域：
      引擎的另一位好朋友，负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限
#### 编译过程以及执行过程示例：
  `var a = 2`

  1. 遇到var a, 编译器会询问作用域是否已经有一个该名称的变量存在，如果有，编译器会忽略该声明，继续编译，如果没有，它会要求作用域在当前作用域集合中声明一个新的变量，命名为a
  2. 接下来编译器会为引擎生成执行需要的代码，这些代码用来处理a = 2这个赋值操作。引擎运行时，首先询问作用域，在当前的作用域集合中有没有一个叫a的变量，如果有，引擎就使用这个变量，如果没有，引擎会继续查找变量，如果最终找到了a，就会把2赋值给a,如果没有找到，引擎就会抛出一个异常!

#### LHS RHS
  - LHS: 当变量出现在赋值操作的左侧进行LHS查询 (**赋值操作的目标是谁) 如果没有找到，会创建**
  - RHS: 非左侧，可以理解成取到源值，（得到某某的值） (**谁是赋值操作的源头) 如果没有找到，会报错**

  `console.log(a)`这里对a的引用是RHS引用，因为这里a没有赋予任何值，相应的，需要查找并取得a的值，才可以进行console.log的操作

  `a = 2`这里对a的引用是LHS引用，因为这里不关心当前的值是啥，只是想要为 = 2 这个赋值操作找一个目标

### ReferenceError同作用域判别失败相关，而TypeError则代表作用域判别成功，但是对结果的操作是非法或者不合理的
---

### 词法作用域
 - 词法作用域就是定义在词法阶段的作用域,换句话说，词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的

### 匿名函数的缺点
 - 在栈追踪调试的时候不方便
 - 当函数想引用自身的时候只能使用arguments.callee
 - 省略了代码可读性
