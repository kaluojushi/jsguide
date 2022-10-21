---
title: JS进阶155题
lang: zh-CN
---

# JavaScript进阶155题

### 1. 输出是什么？（变量声明）

```javascript
function sayHi() {
  console.log(name)
  console.log(age)
  var name = 'Lydia'
  let age = 21
}

sayHi()
```

- A: `Lydia` 和 `undefined`
- B: `Lydia` 和 `ReferenceError`
- C: `ReferenceError` 和 `21`
- D: `undefined` 和 `ReferenceError`

> **答案：D**
>
> 在函数内部，`var`声明的变量会被**提升到函数顶端**，赋值语句保持在原位置，因此`var`声明变量等同于下列代码：
>
> ```javascript
> function sayHi() {
> var name
> console.log(name)
> name = 'Lydia'
> }
> ```
>
> 因此输出`undefined`。
>
> `let`和`const`声明的变量也会提升，但在实际声明它之前，它是不可访问的（称为**暂时性死区**），尝试访问它会抛出`ReferenceError: Cannot access 'age' before initialization `。

> **扩展：**
>
> 我们可以通过以下例子来说明`let`声明的变量确实进行了提升：
>
> ```javascript
> let x = 1;
> function fun() {
>  console.log(x); // ReferenceError
>  let x = 2;
> }
> fun();
> ```
>
> 如果函数`fun`中的`let x`没有提升，`console.log(x)`应返回外层的1才对，但它抛出了`ReferenceError: Cannot access 'x' before initialization`。这说明`let x`确实提升到了`fun`顶端，并形成暂时性死区。

### 2. 输出是什么？（变量声明、`setTimeout`）

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}
```

- A: `0 1 2` 和 `0 1 2`
- B: `0 1 2` 和 `3 3 3`
- C: `3 3 3` 和 `0 1 2`

> **答案：C**
>
> `setTimeout`回调会在循环结束后再执行，这涉及到宏任务与微任务。
>
> 在第一个循环中，`i`是通过`var`定义的，具有全局作用域，`setTimeout`回调执行时，取`i`的值，`i`已经成为3了，因此输出3个3。
>
> 在第二个循环中，`i`是通过`let`定义的，具有块级作用域，每次遍历时，`i`都有新值，并在循环作用域内。
>
> 另外，6个数字是在1 ms后同时（按顺序）输出的。
>
> 第一个循环，若想输出`0 1 2`，可通过闭包修改为：
>
> ```javascript
> for (var i = 0; i < 3; i++) {
> (function (i) {
>  setTimeout(() => console.log(i), 1)
> })(i)
> }
> ```
>
> 解释：这是一个立即执行函数，传入了参数`i`，相当于改写了`setTimeout`回调里`console.log(i)`的`i`为`0 1 2`。

### 3. 输出是什么？（`this`指向）

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

shape.diameter()
shape.perimeter()
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`

>**答案：B**
>
>`diameter`函数作为**对象的方法**被调用，其中的`this`指向调用它的对象，即`shape`对象。
>
>`perimeter`函数是箭头函数，其中的`this`指向**定义它的作用域指向的`this`**，由于`perimeter`外层没有常规函数，因此`this`指向全局变量`window`。`window.radius`为`undefined`，参与计算后结果返回`NaN`。

### 4. 输出是什么？（`+`运算符、真值假值）

```javascript
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`

> **答案：A**
>
> 单目运算符`+`可将后面的变量/字面量转换为`number`类型（等同于`Number()`函数），布尔值`true`被转换为数字`1`。
>
> 逻辑非`!`运算符可将后面的变量/字面量转换为`boolean`类型的相反值，字符串`"Lydia"`被视为truthy，转换为`false`。

>**扩展：**
>
>下列值被视为falsy：`false`、`0`、`-0`、`0n`、`""`、`''`、` `` `、`null`、`undefined`、`NaN`。
>
>下列值被视为truthy：`true`、`{}`、`[]`、`42`、`"0"`、`"false"`、`new Date()`、`-42`、`12n`、`3.14`、`-3.14`、`Infinity`、`-Infinity`等。

### 5. 哪一个是正确的？（对象属性）

```javascript
const bird = {
  size: 'small'
}

const mouse = {
  name: 'Mickey',
  small: true
}
```

- A: `mouse.bird.size`是无效的
- B: `mouse[bird.size]`是无效的
- C: `mouse[bird["size"]]`是无效的
- D: 以上三个选项都是有效的

> **答案：A**
>
> 所有对象的属性（`Symbol`除外）都被视为字符串。
>
> 在B、C中，`bird.size`和`bird["size"]`都是`'small'`，因此`mouse`的`'small'`属性为`true`。
>
> 在A中，`mouse`没有`bird`（或者说是`'bird'`）属性，因此得到`undefined`，对`undefined`尝试取属性会抛出`TypeError: Cannot read property 'size' of undefined`。

### 6. 输出是什么？（对象引用）

```javascript
let c = { greeting: 'Hey!' }
let d

d = c
c.greeting = 'Hello'
console.log(d.greeting)
```

- A: `Hello`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

> **答案：A**
>
> 当`c`被赋值给`d`时，实际上是把`c`代表的对象的引用赋值给了`d`，这样`d`和`c`具有同一个对象的引用。当改变其中一个对象时，其实是改变了所有对象。

### 7. 输出是什么？（包装类）

```javascript
let a = 3
let b = new Number(3)
let c = 3

console.log(a == b)
console.log(a === b)
console.log(b === c)
```

- A: `true` `false` `true`
- B: `false` `false` `true`
- C: `true` `false` `false`
- D: `false` `true` `true`

> **答案：C**
>
> `new Number()`创造了一个对象，这个对象看起来是`number`，但实际上是`object`，它有一些额外功能。
>
> 因此对于`a === b`和`b === c`，因为两者类型不同，返回`false`。
>
> 对于`a == b`，由于`b`是对象，调用`valueOf()`得到3，再与`a`比较，返回`true`。

> **扩展：**
>
> `new Number(3)`与`Number(3)`不同，前者返回一个包装对象`object`，后者是类型转换函数（等同于单目运算符`+`，返回数字`number`。
>
> 对于相等运算符`==`，如果一个操作数为对象，另一个不是，则对象调用`valueOf()`再比较。

### 8. 输出是什么？（静态方法）

```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: 'purple' })
freddie.colorChange('orange')
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`

> **答案：D**
>
> `colorChange()`是`Chameleon`类的静态方法，只能通过类调用，即`Chameleon.colorChange()`，无法通过实例调用。

> **扩展：**
>
> `constructor({ newColor = 'green' } = {})`是一种对象解构写法，同时给`newColor`和`{ newColor }`都设置了默认参数。

### 9. 输出是什么？（变量声明）

```javascript
let greeting
greetign = {} // Typo!
console.log(greetign)
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

>**答案：A**
>
>第2行将`greeting`拼写错误为`greetign`。在JS中，不通过`var`、`let`、`const`直接声明变量将被视为声明了全局变量（即全局对象的属性），如`window.greetign`，因此输出它的值`{}`。
>
>如果在最前面加上`"use strict"`声明，则会抛出`ReferenceError: greetign is not defined`。

### 10. 当我们这么做时，会发生什么？（对象）

```javascript
function bark() {
  console.log('Woof!')
}

bark.animal = 'dog'
```

- A: 正常运行！
- B: `SyntaxError`. 你不能通过这种方式给函数增加属性。
- C: `undefined`
- D: `ReferenceError`

> **答案：A**
>
> `bark`是一个函数对象，可以通过这种方式给它添加属性。

### 11. 输出是什么？（构造函数、原型方法）

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());
```

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`

> **答案： A**
>
> `Person.getFullName`为`Person`函数添加了属性，但当`Person`作为构造函数使用时，它的函数并不能被它的实例使用。
>
> 当尝试对`member`调用`getFullName`时，会抛出`TypeError: member.getFullName is not a function`。
>
> 要想对构造函数添加全体实例可用的方法，可以在构造函数内使用`this`关键字：
>
> ```javascript
> function Person(firstName, lastName) {
> this.firstName = firstName;
> this.lastName = lastName;
> this.getFullName = function () {
>  return `${this.firstName} ${this.lastName}`;
> }
> }
> ```
>
> 或在`Person`的原型上定义函数，这样更省空间：
>
> ```javascript
> Person.prototype.getFullName = function () {
> return `${this.firstName} ${this.lastName}`;
> }
> ```

### 12. 输出是什么？（构造函数、`this`指向）

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')

console.log(lydia)
console.log(sarah)
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

> **答案：A**
>
> `lydia`的声明是标准的根据构造函数生成实例。
>
> `sarah`的声明没有使用`new`关键字，因此`Person`被当做常规函数使用。这里的`this`指向全局变量`window`，`Person`作为常规函数，给`window`添加两个属性后没有返回值，因此`sarah`为`undefined`。

### 13. 事件传播的三个阶段是什么？（事件）

- A: Target > Capturing > Bubbling
- B: Bubbling > Target > Capturing
- C: Target > Bubbling > Capturing
- D: Capturing > Target > Bubbling

> **答案：D**
>
> 先从外向内捕获（capturing），到达目标（target），然后从内向外冒泡（bubbling）。
>
> 查看下面的例子：
>
> ```html
> <body>
> <div onclick="divClick()">
> <p onclick="pClick()">
>  <span onclick="spanClick()">点击事件</span>
> </p>
> </div>
> </body>
> <script>
> function divClick() {
>  console.log('divClick');
> }
> function pClick() {
>  console.log('pClick');
> }
> function spanClick() {
>  console.log('spanClick');
> }
> </script>
> ```
>
> 点击后：输出顺序为`spanClick`、`pClick`、`divClick`（冒泡顺序）。
>
> 要阻止事件冒泡，可以使用`stopPropagation`函数：
>
> ```javascript
> function pClick(event) {
> console.log('pClick');
> event.stopPropagation();
> }
> ```
>
> 这样冒泡到`pClick`就会停止。

### 14. 所有对象都有原型。（原型）

- A: 对
- B: 错

> **答案：B**
>
> 通过`Object.create(null)`创造的对象没有原型，实际上，它没有任何属性。注意：`{}`的原型指向`Object.prototype`。
>
> ```javascript
> const emp1 = Object.create(null), emp2 = {};
> console.log(emp1);  // {}
> console.log(emp2);  // {}
> console.log(emp1.__proto__);  // undefined
> console.log(emp2.__proto__);  // {}
> console.log(emp2.__proto__ === Object.prototype);  // true
> ```
>
> 此外，箭头函数也没有原型，参考第92题。

### 15. 输出是什么？（`+`运算符）

```javascript
function sum(a, b) {
  return a + b
}

sum(1, '2')
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

> **答案：C**
>
> 当相加的两个操作元素有一个为字符串时，相加操作为字符串拼接，`1`被视为字符串`"1"`，答案得到字符串`"12"`。

### 16. 输出是什么？（自增运算符）

```javascript
let number = 0
console.log(number++)
console.log(++number)
console.log(number)
```

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`

> **答案：C**
>
> 后自增运算符：先返回值，后自增，此时输出0，`number`变为1。
>
> 前自增运算符：先自增，后返回值，此时`number`变为2，输出2。
>
> 最后输出`number`的值为2。

### 17. 输出是什么？（字符串模板）【复习】

```javascript
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`
```

- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`

> **答案：B**
>
> 如果使用字符串模板作为参数调用函数，则函数的第一个参数为**被字符串插值分隔的字符串数组**，剩余参数为每个字符串表达式的值。

### 18. 输出是什么？（相等运算符）

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!')
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.')
  } else {
    console.log(`Hmm.. You don't have an age I guess`)
  }
}

checkAge({ age: 18 })
```

- A: `You are an adult!`
- B: `You are still an adult.`
- C: `Hmm.. You don't have an age I guess`

> **答案：C**
>
> 每次新建的对象字面量即使内容一样，也是不同的对象，拥有不同的对象引用。因此无论使用`===`还是`==`，`data`与它们的比较都是`false`。

### 19. 输出是什么？（剩余参数、`typeof`）

```javascript
function getAge(...args) {
  console.log(typeof args)
}

getAge(21)
```

- A: `"number"`
- B: `"array"`
- C: `"object"`
- D: `"NaN"`

> **答案：C**
>
> 扩展运算符会将实参作为数组传递，数组的`typeof`为`"object"`。

### 20. 输出是什么？（变量声明）

```javascript
function getAge() {
  'use strict'
  age = 21
  console.log(age)
}

getAge()
```

- A: `21`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

> **答案：C**
>
> 在JS中，不通过`var`、`let`、`const`直接声明变量将被视为声明了全局变量（即全局对象的属性）。使用`"use strict"`声明可以避免这一操作，而抛出`ReferenceError: age is not defined`。

### 21. 输出是什么？（`eval`）

```javascript
const sum = eval('10*10+5')
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

> **答案：A**
>
> `eval`函数对传进来的字符串视为表达式，对其求值。

### 22. `cool_secret`可访问多长时间？（Storage）【待补充】

```javascript
sessionStorage.setItem('cool_secret', 123)
```

- A: 永远，数据不会丢失。
- B: 当用户关掉标签页时。
- C: 当用户关掉整个浏览器，而不只是关掉标签页。
- D: 当用户关闭电脑时。

> **答案：B**
>
> 用户关闭标签页后，`sessionStorage`存储的数据被清除。
>
> 如果使用`localStorage`，除非调用`localStorage.clear()`，否则数据将永远存在。

### 23. 输出是什么？（变量声明）

```javascript
var num = 8
var num = 10

console.log(num)
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

> **答案：B**
>
> `var`声明的变量可以重复声明，同时保存最新的值。因为`var`会进行**变量提升**，因此上述代码看起来就像这样：
>
> ```javascript
> var num
> num = 8
> num = 10
> ```
>
> `let`声明的变量不可以重复声明。

### 24. 输出是什么？（对象属性、`Set`集合）

```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

obj.hasOwnProperty('1')
obj.hasOwnProperty(1)
set.has('1')
set.has(1)
```

- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`

> **答案：C**
>
> 所有对象的属性（`Symbol`除外）都被视为字符串。无论是`'1'`还是`1`都表示`obj`中为`1`的键。
>
> `Set`不会将`1`和`'1'`视为同一个键。

### 25. 输出是什么？（对象属性）

```javascript
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

> **答案：C**
>
> JS允许对象字面量定义时有重复的键，当然只保留最后一个作为键值，并使用第一个的位置。

### 26. JavaScript 全局执行上下文为你做了两件事：全局对象和 this 关键字。（全局上下文）

- A: 对
- B: 错
- C: 看情况

> **答案：A**
>
> JS代码中随处可访问全局上下文。

### 27. 输出是什么？（`continue`）

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue
  console.log(i)
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

> **答案：C**
>
> `continue`的基本用法。

### 28. 输出是什么？（原型方法）

```javascript
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}

const name = 'Lydia'

name.giveLydiaPizza()
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

> **答案：A**
>
> 通过`String.prototype`添加原型方法后，该方法可被全体string类型或对象使用。

### 29. 输出是什么？（对象属性）

```javascript
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

> **答案：B**
>
> 所有对象的属性（`Symbol`除外）都被视为字符串，如果不是字符串会调用`toString`。
>
> `b`是一个对象，当尝试将它作为`a`的属性时，`b`会调用`toString`，即得到`"[object Object]"`。操作`a[b] = 123`实际上是`a["[object Object]"] = 123`。
>
> 同理，`c`也是一个对象，操作`a[c] = 456`实际上是`a["[object Object]"] = 456`。
>
> 再次打印`a[b]`时，`a["[object Object]"]`已经是`456`。

### 30. 输出是什么？（`setTimeout`）

```javascript
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

> **答案：B**
>
> 尽管`bar`被最先调用，但它的`setTimeout`里的回调函数会被作为新的宏任务先储存起来，等其他宏任务执行完毕后执行。
>
> 当`foo`和`baz`调用完毕后，回调函数才被取出来加入到队列中，并一一调用。我们将这些结构称为调用栈（call stack）、WEB API、队列（queue）。

### 31. 当点击按钮时，`event.target` 是什么？（事件）

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: 一个包含所有嵌套元素的数组。

> **答案：C**
>
> 最深层的元素是事件的`target`。

### 32. 当您单击该段落时，日志输出是什么？（事件）

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

> **答案：A**
>
> 事件处理程序在冒泡阶段执行，也就是从内到外。

### 33. 输出是什么？（`this`指向、`call`、`bind`）

```javascript
const person = { name: 'Lydia' }

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 21)
sayHi.bind(person, 21)
```

- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`

> **答案：D**
>
> `apply`、`call`和`bind`都可以改变函数内`this`的指向，不同之处在于：
>
> - `apply`的第一个参数是`this`指向的对象，第二个参数是一个可迭代对象，如`Math.max.apply(null, [1, 2, 3, 4, 5])`
> - `call`的第一个参数是`this`指向的对象，剩余参数数量不固定，如`Math.max.apply(null, 1, 2, 3, 4, 5)`
> - `bind`与`call`一致，但他返回一个改写了`this`指向的函数，并不立即执行

### 34. 输出是什么？（立即执行函数、`typeof`）

```javascript
function sayHi() {
  return (() => 0)()
}

typeof sayHi()
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

> **答案：B**
>
> 要判断`sayHi()`的`typeof`返回什么，首先看`sayHi()`的返回值。它返回一个**立即执行函数**，也就是将函数`() => 0`立即执行，即得到返回值`0`，因此`typeof 0`返回`"number"`。

### 35. 下列哪些值是falsy？（真值假值）

```javascript
0
new Number(0)
('')
(' ')
new Boolean(false)
undefined
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: All of them are falsy

> **答案：B**
>
> 字符串`' '`长度不为0，被认为是truthy。

### 36.  输出是什么？（`typeof`）

```javascript
console.log(typeof typeof 1)
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

> **答案：B**
>
> `typeof 1`返回`"number"`，而`typeof "number"`则返回`"string"`。

### 37. 输出是什么？（数组）

```javascript
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

> **答案：C**
>
> 当直接操作`array.length`或对超出数组长度的元素位置赋值时，数组长度会随之发生改变，多余的元素被`empty slots`覆盖，它们实际上是`undefined`。
>
> 这些`empty slots`可以被`for`、`for-of`打印为`undefined`，但不可响应`for-in`、`forEach`、`map`等。
>
> 类似地，创建二维数组只能用`new Array(m).fill(0).map(() => new Array(n))`，当中的`fill(0)`不可省略。

### 38. 输出是什么？（`try-catch`、变量作用域）

```javascript
(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
```

- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`

> **答案：A**
>
> 常见的`try-catch`结构或许更好理解：
>
> ```javascript
> try {
>  throw new Error()
> } catch (e) {
>  console.log(e)
> }
> ```
>
> 这里`e`是一个参数，表示`try`块中抛出的错误或其他值。`e`的作用域是`catch`的块级作用域，类似于函数形参。
>
> 因此在题目中，`catch(x)`中的`x`是`catch`块级作用域的`x`，它被赋值为1后，打印为1，但在外层，`x`是外层作用域的`x`，仍为`undefined`。
>
> `y`无论在`catch`作用域还是在外层都指外层作用域的`y`，被赋值为2后，值就为2。

### 39. JavaScript 中的一切都是？（数据类型）

- A: 基本类型与对象
- B: 函数与对象
- C: 只有对象
- D: 数字与对象

> **答案：A**
>
> 基本类型：`number`、`boolean`、`string`、`null`、`undefined`、`symbol`、`bigint`。
>
> 引用类型：`object`，`array`、`function`也是对象。
>
> `typeof`会返回的类型：`"number"`、`"boolean"`、`"string"`、`"undefined"`、`"symbol"`、`"bigint"`、`"object"`、`"function"`。
>
> - `NaN`、`Infinity`的`typeof`返回`"number"`
> - 未定义的变量做`typeof`，不会报错，而返回`"undefined"`
> - `null`的`typeof`返回`"object"`，`array`的`typeof`返回`"object"`（判断`array`可用`Array.isArray()`），基本类型的包装类对象的`typeof`返回`"object"`
> - `class`的`typeof`返回`"function"`

### 40. 输出是什么？（`reduce`）

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur)
  },
  [1, 2]
)
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

> **答案：C**
>
> `reduce`回调中的两个参数`acc`和`cur`，每次取出数组元素给`cur`，并将回调返回值赋给`acc`，最后返回`acc`，回调后的参数表示`acc`的初值。
>
> 这个`reduce`将数组的每个子数组与`[1, 2]`做拼接，最终返回`[1, 2, 0, 1, 2, 3]`。

### 41. 输出是什么？（真值假值）

```javascript
!!null
!!''
!!1
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

> **答案：B**
>
> `null`和`''`都被认为是falsy，`1`被认为是truthy。

### 42. `setInterval` 方法的返回值是什么？（`setInterval`）【复习】

```javascript
setInterval(() => console.log('Hi'), 1000)
```

- A: 一个唯一的 id
- B: 该方法指定的毫秒数
- C: 传递的函数
- D: `undefined`

> **答案：A**
>
> 在浏览器中，`setInterval` 返回一个唯一的 id。此 id 可被用于 `clearInterval` 函数来取消定时。
>
> 在node中，`setInterval`返回一个对象。

### 43. 输出是什么？（扩展运算符）

```javascript
[...'Lydia']
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

> **答案：A**
>
> 扩展运算符作用于字符串时，返回由单个字符组成的字符串数组，作用等同于`'Lydia'.split('')`。

### 44. 输出是什么？（生成器）

```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- A: `[0, 10], [10, 20]`
- B: `20, 20`
- C: `10, 20`
- D: `0, 10 and 10, 20`

> **答案：C**
>
> `generator`是一个生成器函数，每次遇到`yield`它都会暂停执行，并向外传递`yield`表达式的值，除非生成器调用`next()`方法使其继续执行。
>
> 使用`10`初始化生成器后，两次调用生成器的`next()`，它依次返回两个值`10`和`20`。

### 45. 返回值是什么？（`Promise`）【待补充】

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

> **答案：B**
>
> `Promise.race()`传入一个可迭代参数，它将可迭代参数中的每个元素包装为`Promise`并进行**优先解析**，即先处理落定的`Promise`（无论状态为`resolved`或`rejected`），其他的`Promise`静默处理，并返回落定`Promise`的镜像。
>
> 本题将`firstPromise`和`secondPromise`传入`Promise.race()`后，由于`secondPromise`的回调0.1秒后执行`res`，也就是先落定为`resolved`，因此`Promise.race()`返回`secondPromise`的镜像，调用`then()`后，`promise`的`res()`向`then()`的回调传入`"two"`，因此打印出`"two"`。

> **扩展：**
>
> `setTimeout`可以接受如下的参数：
>
> - 第一个参数`fn`，是一个回调函数，该函数在`timeout`时间后被调用
> - 第二个参数`timeout`，指延时时间毫秒数，当为0或省略时表示立即调用（但也要等宏任务处理完）
> - 剩余参数`args`，是传递给`fn`调用时的实参，因为`fn`在定义时只有形参
>
> `Promise`回调中的`res`和`rej`都可以带参数，会被`then`和`catch`捕捉。

### 46. 输出是什么？（对象引用）【复习】

```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

- A: `null`
- B: `[null]`
- C: `[{}]`
- D: `[{ name: "Lydia" }]`

> **答案：D**
>
> 第一行，我们声明对象`person`。第二行，我们将数组`members`的第一个元素赋值为`person`，这实际上执行了浅拷贝，表示`members[0]`和`person`指向了同一个对象。
>
> 第三行，将`person`置为`null`后，`members[0]`依然保持对对象的引用。
>
> 这有点类似于：
>
> ```javascript
> let obj1 = { a: 1, b: 2, c: 3 };
> let obj2 = obj1;
> obj1 = null;
> console.log(obj2);  // { a: 1, b: 2, c: 3 }
> ```

### 47. 输出是什么？（`for-in`）

```javascript
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia" }, { age: 21 }`
- B: `"name", "age"`
- C: `"Lydia", 21`
- D: `["name", "Lydia"], ["age", 21]`

> **答案：B**
>
> `for-in`循环遍历的是对象的key（`Symbol`）除外。

### 48. 输出是什么？（`+`运算符）

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

> **答案：B**
>
> `+`运算符是从左到右的运算顺序，无论执行算术加法或字符串拼接。
>
> 首先计算`3 + 4`得到`7`，然后计算`7 + "5"`得到`"75"`。

### 49. `num`的值是什么？（`parseInt`）

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

> **答案：C**
>
> `parseInt`将字符串转为数字的逻辑是，从左到右解析字符串，直到遇到无法解释的字符为止。
>
> 本题中，`"*"`是无法解释的字符，所以返回`7`。

### 50. 输出是什么？（`map`、`typeof`）

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

> **答案：C**
>
> 三个数都满足`if`条件，返回`undefined`。

### 51. 输出的是什么？（函数参数、对象引用）

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
```

- A: `{ name: "Lydia" }, "1997"`
- B: `{ name: "Sarah" }, "1998"`
- C: `{ name: "Lydia" }, "1998"`
- D: `{ name: "Sarah" }, "1997"`

> **答案：A**
>
> 基本参数是值传递，将函数中的`year`改为`"1998"`，不会影响`birthYear`的值。
>
> 对象是引用传递，将函数中`member`的`name`属性改为`"Lydia"`，实际上就改变了`person`的`name`属性。

> **扩展：**
>
> 在函数中直接更改对象参数的引用，不会更改原对象的引用，参考第46题。
>
> ```javascript
> const obj = { a: 1, b: 2 };
> function foo(o) {
> o = { a: 4, b: 5 };
> }
> foo(obj);
> console.log(obj); // { a: 1, b: 2 }
> ```

### 52. 输出是什么？（`try-catch`）

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```

- A: `"It worked! Hello world!"`
- B: `"Oh no an error: undefined`
- C: `SyntaxError: can only throw Error objects`
- D: `"Oh no an error: Hello world!`

> **答案：D**
>
> `greeting()`执行后抛出异常，异常是字符串，异常能被`catch`捕捉为`e`，`e`就是这个字符串。

### 53. 输出是什么？（`this`指向）

```javascript
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
```

- A: `"Lamborghini"`
- B: `"Maserati"`
- C: `ReferenceError`
- D: `TypeError`

> **答案：B**
>
> 由于构造函数`Car`返回了一个对象，`myCar`就指向这个对象。因此`myCar`的`make`属性应该是`"Maserati"`。

### 54. 输出是什么？（`typeof`、变量声明）

```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

- A: `"undefined", "number"`
- B: `"number", "number"`
- C: `"object", "number"`
- D: `"number", "undefined"`

> **答案：A**
>
> 立即执行函数中，`let x = (y = 10)`实际上是两个语句的缩写：`y = 10`和`let x = y`。
>
> 不通过`var`、`let`、`const`直接声明变量将被视为声明了全局变量（即全局对象的属性），因此`y`是一个全局变量，`typeof y`返回`"number"`。
>
> `x`是`let`声明的，只在块作用域起作用，因此`typeof x`里的`x`是未声明变量，返回`"undefined"`。

### 55. 输出是什么？（原型方法、`delete`）

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- A: `"Woof I am Mara"`, `TypeError`
- B: `"Woof I am Mara"`,`"Woof I am Mara"`
- C: `"Woof I am Mara"`, `undefined`
- D: `TypeError`, `TypeError`

> **答案：A**
>
> `delete`可以删除对象的属性和方法，原型对象当然也可以。因此，在`delete`后再尝试调用`bark`时，会抛出`TypeError: pet.bark is not a function`。

### 56. 输出是什么？（`Set`集合）

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- A: `[1, 1, 2, 3, 4]`
- B: `[1, 2, 3, 4]`
- C: `{1, 1, 2, 3, 4}`
- D: `{1, 2, 3, 4}`

> **答案：D**
>
> 将数组转为`Set`集合时，集合会自动去重。

### 57. 输出是什么？（模块化）【待补充】

```javascript
// counter.js
let counter = 10;
export default counter;
```

```javascript
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```

- A: `10`
- B: `11`
- C: `Error`
- D: `NaN`

> **答案：C**
>
> `import`导入的数据是只读的，不能被修改，尝试修改会抛出`TypeError: Assignment to constant variable`。

### 58. 输出是什么？（`delete`）

```javascript
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
```

- A: `false`, `true`
- B: `"Lydia"`, `21`
- C: `true`, `true`
- D: `undefined`, `undefined`

> **答案：A**
>
> `delete`的返回值是`true`或`false`，表示是否删除成功。
>
> `age`是全局变量，即全局对象的属性，可以删除成功。`name`是`const`声明的，无法被`delete`删除。
>
> 以下情况`delete`会返回`true`：删除全局变量或对象的属性、方法，即使它不存在或进行了重复删除。
>
> 以下情况`delete`会返回`false`：删除`let`、`const`、`var`声明的变量；删除的属性设置了`configurable: false`。
>
> 注意，在严格模式下，`delete`不会返回`false`，而是会抛出`SyntaxError: Delete of an unqualified identifier in strict mode`或`TypeError: Cannot delete property 'xxx' of #<Object>`。

### 59. 输出是什么？（解构）

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- A: `[[1, 2, 3, 4, 5]]`
- B: `[1, 2, 3, 4, 5]`
- C: `1`
- D: `[1]`

> **答案：C**
>
> 这是数组的解构赋值语法。使用`[a, b] = [1, 2]`可以将`a`赋值为`1`，`b`赋值为`2`；如果左边变量比右边多，则多余的变量赋为`undefined`；如果左边变量比右边少，则按顺序赋值后多余的值忽略，如：
>
> ```javascript
> let [a, b] = [1, 2];
> let [c, d, e] = [3, 4];
> let [f] = [5, 6, 7, 8];
> console.log(a, b);  // 1 2
> console.log(c, d, e); // 3 4 undefined
> console.log(f); // 5
> ```

### 60. 输出是什么？（扩展运算符）

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- A: `{ admin: true, user: { name: "Lydia", age: 21 } }`
- B: `{ admin: true, name: "Lydia", age: 21 }`
- C: `{ admin: true, user: ["Lydia", 21] }`
- D: `{ admin: true }`

> **答案：B**
>
> 将对象通过扩展运算符操作后，对象的每个键值对都被复制，并可用于其他对象的赋值。

### 61. 输出是什么？（`defineProperty`）【复习】

```javascript
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- A: `{ name: "Lydia", age: 21 }`, `["name", "age"]`
- B: `{ name: "Lydia", age: 21 }`, `["name"]`
- C: `{ name: "Lydia"}`, `["name", "age"]`
- D: `{ name: "Lydia"}`, `["age"]`

> **答案：B**
>
> 通过`defineProperty`可以给对象添加属性或修改属性。但在默认情况下，该属性是**不可枚举的**，即无法被`for-in`遍历，也无法被`Object.keys()`获取。
>
> 可以通过以下方式控制`defineProperty`添加的属性：
>
> ```javascript
> Object.defineProperty(person, "age", {
> value: 21,  // 属性值
> enumerable: true, // 是否可枚举，即是否可以被for-in遍历或被Object.keys()获取，默认为false
> writable: true, // 是否可写，即是否可以被修改，默认为false
> configurable: true  // 是否可配置，即是否可以被删除或是否可以修改属性的特性（writable, enumerable, configurable），默认为false
> });
> ```
>
> 注意，在node下，`console.log(person)`在`age`不可枚举的情况下，输出`{ name: "Lydia"}`。

### 62. 输出是什么？（`JSON`）【复习】

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- A: `"{"level":19, "health":90}"`
- B: `"{"username": "lydiahallie"}"`
- C: `"["level", "health"]"`
- D: `"{"username": "lydiahallie", "level":19, "health":90}"`

> **答案：A**
>
> `JSON.stringify()`的第二个参数称为`replacer`。
>
> 当`replacer`是数组时，只有包含在数组里的属性会被转为字符串，并使用数组顺序，如本题所示。
>
> 当`replacer`是函数时，`JSON.stringify()`会把每个属性都调用一次函数，函数返回值将成为属性值写入JSON字符串，注意：
>
> - `JSON.stringify()`首先会以`key`为`""`、`value`为原对象调用一次函数，如果函数返回一个对象，则以该对象进行接下来的`JSON.stringify()`，否则停止操作，将整个返回值作为字符串返回（`undefined`返回`undefined`而非`"undefined"`）。
> - 如果函数返回值遇到`undefined`，则忽略该键。
>
> ```javascript
> const settings = {
>   username: "lydiahallie",
>   level: 19,
>   health: 90
> };
> 
> function rp1(key, value) {
>   if (key === "") {
>     return { a: 1, b: 2, c: 3 };
>   }
>   return key === "a" ? 5 : value;
> }
> function rp2(key, value) {
>   return 5;
> }
> function rp3(key, value) {
>   if (typeof value === "number") {
>     return value * 2;
>   }
>   return value;
> }
> 
> console.log(JSON.stringify(settings, rp1)); // {"a":5,"b":2,"c":3}
> console.log(JSON.stringify(settings, rp2)); // 5
> console.log(JSON.stringify(settings, rp3)); // {"username":"lydiahallie","level":38,"health":180}
> ```

### 63. 输出是什么？（自增运算符）

```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- A: `10`, `10`
- B: `10`, `11`
- C: `11`, `11`
- D: `11`, `12`

> **答案：A**
>
> 第一个函数访问到的`num`是外层`num`，即`10`，它的返回值是`num`自增前的值，即`10`。
>
> 第二个函数将`num1 = 10`传入，它的返回值也是`number`自增前的值，即`10`。

### 64. 输出什么？（默认参数、扩展运算符）

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
};

multiply();
multiply();
multiply(value);
multiply(value);
```

- A: `20`, `40`, `80`, `160`
- B: `20`, `40`, `20`, `40`
- C: `20`, `20`, `20`, `40`
- D: `NaN`, `NaN`, `20`, `40`

> **答案：C**
>
> 前两次没有传入参数，`x`使用默认参数`{ ...value }`。这个对象字面量使用扩展运算符操作`value`，相当于`value`的复制品。两次调用都是一个新的对象，因此都返回`20`。
>
> 后两次传入`value`，`x`相当于直接对`value`做操作，`value.x`的值被改变，因此返回`20`和`40`。

### 65. 输出什么？（`reduce`）

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- A: `1` `2` and `3` `3` and `6` `4`
- B: `1` `2` and `2` `3` and `3` `4`
- C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`
- D: `1` `2` and `undefined` `3` and `undefined` `4`

> **答案：D**
>
> `reduce`的前两个参数`acc`（即`x`）和`cur`（即`y`），当`acc`没有设置初始值时，`acc`将被设置为数组第一个值，`reduce`从数组第二个值开始遍历。所以第一次输出`1`和`2`。
>
> 每次`reduce`回调的返回值作为下一次调用的`acc`，题目中的回调函数没有返回值，因此后两次的`acc`都为`undefined`。

### 66. 使用哪个构造函数可以成功继承`Dog`类？（类的继承）

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1 
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4 
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
```

- A: 1
- B: 2
- C: 3
- D: 4

> **答案：B**
>
> 在子类中使用`this`之前，应调用父类`super`初始化。同时`name`也应传入子类的构造函数。

### 67. 输出什么？（模块化）【复习】

```javascript
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```

- A: `running index.js`, `running sum.js`, `3`
- B: `running sum.js`, `running index.js`, `3`
- C: `running sum.js`, `3`, `running index.js`
- D: `running index.js`, `undefined`, `running sum.js`

> **答案：B**
>
> `import`在编译阶段就执行。因此代码运行之前，导入的模块就已运行。
>
> 如果使用`require()`，则输出顺序为`running index.js`, `running sum.js`, `3`。

### 68. 输出什么？（包装类、`Symbol`）

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- A: `true`, `true`, `false`
- B: `false`, `true`, `false`
- C: `true`, `false`, `true`
- D: `true`, `true`, `true`

> **答案：A**
>
> 前两个包装类没有加`new`关键字，因此都是强转，当然返回`false`。
>
> 对于`Symbol`，每个`Symbol`都是唯一的，并且不可被`new`。

### 69. 输出什么？（`padStart`）

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- A: `"Lydia Hallie"`, `"Lydia Hallie"`
- B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)
- C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)
- D: `"Lydia Hallie"`, `"Lyd"`

> **答案：C**
>
> `padStart`方法可以在字符串前填充空格，参数`n`表示填充空格后字符串的长度为`n`。本题中字符串长度为12，`n = 13`时就在字符串前填充1个空格。
>
> 当`n`小于等于字符串长度时，不做任何操作，返回原字符串。

### 70. 输出什么？（`+`运算符）

```javascript
console.log("🥑" + "💻");
```

- A: `"🥑💻"`
- B: `257548`
- C: A string containing their code points
- D: Error

> **答案：A**
>
> emoji也是字符串，当然执行字符串拼接。

### 71. 如何能打印出`console.log`语句后注释掉的值？（生成器）

```javascript
function* startGame() {
  const 答案 = yield "Do you love JavaScript?";
  if (答案 !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- A: `game.next("Yes").value` and `game.next().value`
- B: `game.next.value("Yes")` and `game.next.value()`
- C: `game.next().value` and `game.next("Yes").value`
- D: `game.next.value()` and `game.next.value("Yes")`

> **答案：C**
>
> 当生成器执行到`yield`语句时暂停执行，并向外传递`yield`表达式后的值，因此第1个位置可以使用`game.next().value`。
>
> 生成器继续执行时，`next()`可以传入参数，这个参数作为`yield`表达式的返回值，如果为空就是`undefined`。因此这里传入`"Yes"`，也就是给生成器中的`函数`赋值`"Yes"`，函数的`if`判断返回`false`，并返回第二句话。

### 72. 输出什么？（`String.raw`）

```javascript
console.log(String.raw`Hello\nworld`);
```

- A: `Hello world!`
- B: `Hello`
  `world`
- C: `Hello\nworld`
- D: `Hello\n`
  `world`

> **答案：C**
>
> `String.raw()`返回一个模板字符串的原始字符串，防止转义符被转义。例如：
>
> ```javascript
> const path = `C:\temp\my\file.txt`;
> console.log(String.raw`${path}`); // C:  empmy  ile.txt
> console.log(String.raw`C:\temp\my\file.txt`); // C:\temp\my\file.txt
> ```

### 73. 输出什么？（`async-await`）【待补充】

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- A: `"I made it!"`
- B: `Promise {<resolved>: "I made it!"}`
- C: `Promise {<pending>}`
- D: `undefined`

> **答案：C**
>
> 函数运行到`await`时，将后面的`Promise`加入微任务队列，暂停执行函数，并开始执行外面的任务。因为异步函数始终返回一个`Promise`，函数即使还未返回值，但`data`表示`getData()`挂起的一个待定状态的`Promise`。
>
> 要想落定期约，可以在后面加上：`data.then(res => console.log(res))`，这会给微任务队列加上等待`data`表示的期约落定的任务，直至函数返回值。
>
> 下面的例子说明了执行顺序：
>
> ```javascript
> async function getData() {
>  console.log(1);
>  const p = await Promise.resolve("I made it!");
>  console.log(2);
>  return p;
> }
> 
> const data = getData();
> console.log(3);
> data.then(res => console.log(res));
> console.log(4);
> // 输出顺序：1 => 3 => 4 => 2 => I made it!
> ```
>
> 异步函数执行 => 打印1 => 队列添加`await`后的期约，异步函数暂停执行 => 打印3 => 队列添加函数期约落定任务 => 打印4 => 宏任务队列空，期约解决，函数恢复执行，字符串赋给`p` => 打印2 => 字符串被异步函数返回，并包装为期约 => 函数期约落定，访问期约解决的值

### 74. 输出什么？（数组`push`）

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

- A: `['apple', 'banana']`
- B: `2`
- C: `true`
- D: `undefined`

> **答案：B**
>
> 数组的`push`方法返回一个数字，这个数字是改变后的数组的长度。

### 75. 输出什么？（对象`freeze`）【复习】

```javascript
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;
console.log(shape)
```

- A: `{ x: 100, y: 20 }`
- B: `{ x: 10, y: 20 }`
- C: `{ x: 100 }`
- D: `ReferenceError`

> **答案：B**
>
> `Object.freeze()`可以使得一个对象的属性无法被添加、修改或删除，也无法修改对象原型和配置。
>
> 在非严格模式下，对象被冻结后，上述操作不会影响对象；在严格模式下，会抛出`TypeError: Cannot assign to read only property 'x' of object '#<Object>'`。
>
> 这个冻结是浅冻结，意味着如果对象的属性是对象，则子对象无法冻结。
>
> 可以通过`Object.isFrozen()`检查对象是否被冻结。当然，数组也可以被冻结。

### 76. 输出什么？（解构）

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- A: `"Lydia"`
- B: `"myName"`
- C: `undefined`
- D: `ReferenceError`

> **答案：A**
>
> 这是对象解构语法，等同于`const myName = { name: "Lydia" }.name`。
>
> 当然也可以不用冒号，这样键名就是变量名，即`const { name } = { name: "Lydia" }`。

### 77. 以下是个纯函数么？（纯函数）

```javascript
function sum(a, b) {
  return a + b;
}
```

- A: Yes
- B: No

> **答案：A**
>
> **纯函数**是不会带来**副作用**的函数。它的输入输出信息都是显式的，只通过参数输入信息，只通过返回值输出信息。
>
> 以下是几个纯函数和非纯函数的例子：
>
> ```javascript
> function fun1(x) { return x + 1; } // 是纯函数
> let a = 5;
> function fun2() { let b = a; } // 不是纯函数
> function fun3() { return Math.random(); } // 不是纯函数
> function fun4() { console.log('hello'); } // 不是纯函数
> ```

### 78. 输出什么？（闭包）

```javascript
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```

- A: `Calculated! 20` `Calculated! 20` `Calculated! 20`
- B: `Calculated! 20` `From cache! 20` `Calculated! 20`
- C: `Calculated! 20` `From cache! 20` `From cache! 20`
- D: `Calculated! 20` `From cache! 20` `Error`

> **答案：C**
>
> 首先我们看到`add`返回的是一个函数，这个函数被赋给`addFunction`，随后`add`调用结束。
>
> 在调用`addFunction`时，注意到函数里使用了`add`函数中的局部变量`cache`，虽然`add`已经调用结束，但局部变量`cache`没有被销毁，依然可以访问，这就是典型的**闭包**。这个`cache`类似于一个全局变量。
>
> 理解这之后，就很好做了。首先将`10`存入`cache`，`cache`此时形如`{ 10: 20 }`。后面两次调用都能得到`cache`中的`10`。

### 79. 输出什么？（`for-in`、`for-of`）

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- A: `0` `1` `2` `3` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- B: `"☕"` `"💻"` `"🍷"` `"🍫"` and `"☕"` `"💻"` `"🍷"` `"🍫"`
- C: `"☕"` `"💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`
- D: `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

> **答案：A**
>
> `for-in`可以遍历一个对象**自有的、继承的、可枚举的、非`Symbol`的**属性，对于数组，它遍历数组的下标。
>
> `for-of`可以遍历一个可迭代对象（`Array`、`Map`、`Set`、`string`等）的值，对于数组，它遍历数组的元素。

### 80. 输出什么？（数组）

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```

- A: `["1 + 2", "1 * 2", "1 / 2"]`
- B: `["12", 2, 0.5]`
- C: `[3, 2, 0.5]`
- D: `[1, 1, 1]`

> **答案：C**
>
> 数组可以包含任何值。如果是表达式，则进行计算。

### 81. 输出什么？（函数参数）

```javascript
function sayHi(name) {
  return `Hi there, ${name}`
}

console.log(sayHi())
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

> **答案：B**
>
> 如果不给函数传实参，函数的形参将被默认赋为`undefined`。

### 82. 输出什么？（`this`指向）

```javascript
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
```

- A: `"🥑"` and `"😍"`
- B: `"🥑"` and `"😎"`
- C: `"😍"` and `"😎"`
- D: `"😎"` and `"😎"`

> **答案：B**
>
> 谁调用，`this`就指向谁。
>
> 第一个输出中，`getStatus()`被`data`调用，`this`指向`data`，因此`this.status`就是`data.status`。
>
> 第二个输出中，`getStatus()`的`this`指向被`call`修改为箭头函数里的`this`，箭头函数`this`的指向等同于外层`this`的指向，即全局对象。`var`声明的变量被视为全局对象的属性，因此`this.status`就是`window.status`也就是开头声明的`var status`。

> **扩展：**
>
> 浏览器和node对全局的`this`、`var`定义的变量处理逻辑不同。浏览器的JS代码是嵌入`script`标签直接运行的，因此本身就是全局；node的JS代码是作为一个子模块运行的，类似于函数块。因此：
>
> - 浏览器的`this`是全局对象`window`，node的`this`是一个空对象`{}`而非全局对象`global`。
> - 浏览器下`var`定义的变量就是全局变量，是`window`对象的属性；node下`var`定义的变量是局部变量（函数作用域），不会成为`global`也不会成为`this`的属性。
> - 直接定义的变量在浏览器和node都被认为是全局变量（全局对象的属性），因为函数中如此定义的变量会突破函数作用域，作用于全局。

### 83. 输出什么？（对象属性）

```javascript
const person = {
  name: "Lydia",
  age: 21
}

let city = person.city
city = "Amsterdam"

console.log(person)
```

- A: `{ name: "Lydia", age: 21 }`
- B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`
- C: `{ name: "Lydia", age: 21, city: undefined }`
- D: `"Amsterdam"`

> **答案：A**
>
> `person.city`是`undefined`，所以变量`city`是`undefined`。把`city`重新赋值后，由于没有使用`person`的引用，因此并没有直接修改`person`，返回的是原对象。

### 84. 输出什么？（变量声明）

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

> **答案：C**
>
> `const`定义的变量是块作用域，因此两个定义的`message`都只是在其大括号内的作用域，`return`后面尝试使用`message`会抛出`ReferenceError: message is not defined`。

### 85. 什么样的信息将被打印？（`Promise`）【复习】

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```

- A: `fetch`方法的结果
- B: 第二次调用`fetch`方法的结果
- C: 前一个`.then()`中回调方法返回的结果
- D: 总是`undefined`

> **答案：C**
>
> 当一个`Promise`解决后，调用`.then()`可以获取`Promise`解决的值，同时继续返回一个`Promise`，这个`Promise`以此次回调的返回值作为解决值。例如：
>
> ```javascript
> Promise.resolve("123").then(parseInt).then(console.log);  // 123
> ```

### 86. 哪个选项是将`hasName`设置为`true`的方法，前提是不能将`true`作为参数传递？（真值假值）

```javascript
function getName(name) {
  const hasName = //
}
```

- A: `!!name`
- B: `name`
- C: `new Boolean(name)`
- D: `name.length`

> **答案：A**
>
> 两次逻辑非运算符可以将变量或常量转变为对应的布尔值。
>
> `new Boolean()`返回的是包装类对象，而非基本类型布尔值。

### 87. 输出什么？（字符串）

```javascript
console.log("I want pizza"[0])
```

- A: `"""`
- B: `"I"`
- C: `SyntaxError`
- D: `undefined`

> **答案：B**
>
> 字符串可以使用中括号索引，类似于数组，等同于字符串的`charAt()`函数。

### 88. 输出什么？（默认参数）

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}

sum(10)
```

- A: `NaN`
- B: `20`
- C: `ReferenceError`
- D: `undefined`

> **答案：B**
>
> 默认参数可以将参数的默认值设置为函数其他参数，只要其他参数在该参数之前定义即可。
>
> 本题中，传入`num1 = 10`，`num2`默认使用`num1`的值即`10`，因此打印`20`。
>
> 如果其他参数定义在默认参数之后，则会抛出`ReferenceError`，例如：
>
> ```javascript
> function fun(x = y, y = 2) {
> console.log(x, y);
> }
> 
> fun();  // ReferenceError: Cannot access 'y' before initialization
> fun(1); // 1 2
> fun(1, 3); // 1 3
> ```

### 89. 输出什么？（模块化）【待补充】

```javascript
// module.js 
export default () => "Hello world"
export const name = "Lydia"

// index.js 
import * as data from "./module"

console.log(data)
```

- A: `{ default: function default(), name: "Lydia" }`
- B: `{ default: function default() }`
- C: `{ default: "Hello world", name: "Lydia" }`
- D: Global object of `module.js`

> **答案：A**
>
> 使用`import * as data`语法时，模块所有的`export`都被导入到文件，并创建一个名为`data`的对象。模块的默认导出在`data`对象中被命名为`default`属性，命名导出在`data`对象被命名为其变量名的属性。

### 90. 输出什么？（`typeof`）

```javascript
class Person {
  constructor(name) {
    this.name = name
  }
}

const member = new Person("John")
console.log(typeof member)
```

- A: `"class"`
- B: `"function"`
- C: `"object"`
- D: `"string"`

> **答案：C**
>
> `member`是个对象，当然返回`"object"`。
>
> 如果打印`typeof Person`则会返回`"function"`，因为`class`是构造函数的语法糖。

### 91. 输出什么？（数组`push`）

```javascript
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```

- A: `[1, 2, 3, 4, 5]`
- B: `[1, 2, 3, 5]`
- C: `[1, 2, 3, 4]`
- D: `Error`

> **答案：D**
>
> 数组的`push`方法返回一个数字，这个数字是改变后的数组的长度。因此`newList`是数组长度也就是`4`，再尝试对它调用`push`方法会抛出`TypeError: newList.push is not a function`。

### 92. 输出什么？（原型）

```javascript
function giveLydiaPizza() {
  return "Here is pizza!"
}

const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)
```

- A: `{ constructor: ...}` `{ constructor: ...}`
- B: `{}` `{ constructor: ...}`
- C: `{ constructor: ...}` `{}`
- D: `{ constructor: ...}` `undefined`

> **答案：D**
>
> 每一个函数都会有一个属性`prototype`，它指向一个原型对象，函数作为构造函数使用时，它的实例也指向这个原型对象，即`A.prototype === a.__proto__`；同时，这个原型对象有一个属性`constructor`，指向原函数，即`A.prototype.constructor === A`。
>
> 对于`giveLydiaPizza`，虽然其可能本意并不是当做构造函数使用，但其确实可以使用`new`关键字构造一个实例，因此它当然有`prototype`属性，指向它的原型对象。（在node下，由于原型对象的`constructor`属性是不可枚举的，因此会打印`{}`）
>
> 对于`giveLydiaChocolate`，箭头函数不可当做构造函数使用（因为它没有自己的`this`），使用`new`关键字会报错，因此自然也没有`prototype`属性，返回`undefined`。

### 93. 输出什么？（解构）

```javascript
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```

- A: `name` `Lydia` and `age` `21`
- B: `["name", "Lydia"]` and `["age", 21]`
- C: `["name", "age"]` and `undefined`
- D: `Error`

> **答案：A**
>
> `Object.entries`返回一个二维数组，每个子数组长度为2，分别是对象的键和值。
>
> 在`for-of`循环时，令`[x, y]`为循环项，实际上是执行了数组解构，将`x`赋值为键，`y`赋值为值。

### 94. 输出什么？（剩余参数）

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

- A: `["banana", "apple", "pear", "orange"]`
- B: `[["banana", "apple"], "pear", "orange"]`
- C: `["banana", "apple", ["pear"], "orange"]`
- D: `SyntaxError`

> **答案：D**
>
> 剩余参数只能位于函数参数的最后，否则会抛出`SyntaxError: Rest parameter must be last formal parameter`。

### 95. 输出什么？（自动插入分号）

```javascript
function nums(a, b) {
  if
  (a > b)
  console.log('a is bigger')
  else 
  console.log('b is bigger')
  return 
  a + b
}

console.log(nums(4, 2))
console.log(nums(1, 2))
```

- A: `a is bigger`, `6` and `b is bigger`, `3`
- B: `a is bigger`, `undefined` and `b is bigger`, `undefined`
- C: `undefined` and `undefined`
- D: `SyntaxError`

> **答案：C**
>
> JS里不用显示书写分号，JS引擎会自动在语句后插入分号。
>
> 但是，`return`后面添加了回车，JS引擎认为`return`是一句完整的语句，就像这样：
>
> ```javascript
> return;
> a + b;
> ```
>
> 此时`a + b`永远不会执行，而空`return`实际上返回的是`undefined`，因此输出两个`undefined`。

### 96. 输出什么？（类）

```javascript
class Person {
  constructor() {
    this.name = "Lydia"
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah"
  }
}

const member = new Person()
console.log(member.name)
```

- A: `"Lydia"`
- B: `"Sarah"`
- C: `Error: cannot redeclare Person`
- D: `SyntaxError`

> **答案：B**
>
> `class`是构造函数的语法糖，以上代码等同于：
>
> ```javascript
> function Person () {
> this.name = "Lydia"
> }
> 
> Person = function AnotherPerson () {
> this.name = "Sarah"
> }
> ```
>
> 这当然是允许的。

### 97. 输出什么？（`Symbol`、对象属性）

```javascript
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```

- A: `{Symbol('a'): 'b'}` and `["{Symbol('a')"]`
- B: `{}` and `[]`
- C: `{ a: "b" }` and `["a"]`
- D: `{Symbol('a'): 'b'}` and `[]`

> **答案：D**
>
> `Symbol`属性是**不可枚举的**，它无法被`Object.keys()`获取，也无法通过`for-in`遍历，但可以被`Object.getOwnPropertySymbols()`获取。
>
> 虽然`Symbol`属性不可枚举，但在浏览器和node下打印的对象均可以显示它。

### 98. 输出什么？（扩展运算符、解构）

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- A: `[1, [2, 3, 4]]` and `SyntaxError`
- B: `[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`
- C: `[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`
- D: `Error` and `{ name: "Lydia", age: 21 }`

> **答案：A**
>
> 将`list`传入`getList`参数时，执行数组解构，即`[x, ...y] = [1, 2, 3, 4]`，此时`x`为`1`，`y`为数组`[2, 3, 4]`，返回`[x, y]`即`[1, [2, 3, 4]]`。
>
> 对于`getUser`的箭头函数，虽然仅返回一个值的情况下可以不写大括号，但这时返回一个对象，箭头函数会把对象的大括号认为是函数体的块语句，因此抛出`SyntaxError: Unexpected token ':'`。
>
> 要想箭头函数顺利返回一个对象，应将对象用小括号包起来，即：
>
> ```javascript
> const getUser = user => ({ name: user.name, age: user.age })
> ```

### 99. 输出什么？（异常）

```javascript
const name = "Lydia"

console.log(name())
```

- A: `SyntaxError`
- B: `ReferenceError`
- C: `TypeError`
- D: `undefined`

> **答案：C**
>
> `name`不是一个函数，如果尝试将它以函数形式调用，则会抛出`TypeError: name is not a function`。
>
> 如果编写的JS语句非法，会抛出`SyntaxError`，例如拼写错误；如果JS语句合法但出现了不恰当的引用，会抛出`ReferenceError`，例如先使用后定义`let`变量。

### 100. 输出什么？（字符串模板、真值假值、逻辑与运算符）

```javascript
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

- A: `possible! You should see a therapist after so much JavaScript lol`
- B: `Impossible! You should see a therapist after so much JavaScript lol`
- C: `possible! You shouldn't see a therapist after so much JavaScript lol`
- D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`

> **答案：B**
>
> `[]`被视为truthy，逻辑与运算符会返回后者，即`'Im'`。
>
> `''`被视为falsy，逻辑与运算符会直接返回前者，即`''`。

### 101. 输出什么？（真值假值、逻辑或运算符）

```javascript
const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three)
```

- A: `false` `null` `[]`
- B: `null` `""` `true`
- C: `{}` `""` `[]`
- D: `null` `null` `true`

> **答案：C**
>
> `false || {}`返回后者`{}`，`{} || null`返回前者`{}`。
>
> `null || false`返回后者`false`，`false || ""`返回后者`""`。
>
> `[] || 0`返回前者`[]`，`[] || true`返回前者`[]`。

### 102. 输出什么？（`Promise`、`async-await`）【复习】

```javascript
const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction() {
  myPromise().then(res => console.log(res))
  console.log('second')
}

async function secondFunction() {
  console.log(await myPromise())
  console.log('second')
}

firstFunction()
secondFunction()
```

- A: `I have resolved!`, `second` and `I have resolved!`, `second`
- B: `second`, `I have resolved!` and `second`, `I have resolved!`
- C: `I have resolved!`, `second` and `second`, `I have resolved!`
- D: `second`, `I have resolved!` and `I have resolved!`, `second`

>**答案：D**
>
>我们分析一下这个程序的执行过程：
>
>- 调用`firstFunction()`，遇到`myPromise()`返回的这个`Promise`解决后的任务，将其加入微任务队列中
>- 继续向下执行，输出`"second"`，`firstFunction()`调用结束，退出
>- 调用`secondFunction()`（这也是宏任务），遇到`await`关键字，将恢复函数运行的任务以及后面的`myPromise()`返回的这个`Promise`解决值加入微任务队列，函数退出
>- 宏任务队列空，开始执行微任务队列
>- 首先解决第一个`Promise`，打印`"I have resolved!"`。
>- 然后恢复`secondFunction()`的运行，此时`await`已取回`Promise`解决值，打印`"I have resolved!"`。
>- 最后打印`"second"`。

### 103. 输出什么？（`Set`集合、`+`运算符）

```javascript
const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}
```

- A: `3`, `NaN`, `NaN`
- B: `3`, `7`, `NaN`
- C: `3`, `Lydia2`, `[Object object]2`
- D: `"12"`, `Lydia2`, `[Object object]2`

> **答案：C**
>
> `Set`集合在遍历时会按添加顺序遍历。
>
> 对于`1 + 2`，`+`运算符进行数学运算，返回3。
>
> 对于`"Lydia" + 2`，`+`运算符进行字符串拼接，返回`"Lydia2"`。
>
> 对于`{ name: "Lydia" } + 2`，如果`+`运算符的两个操作数都不是数值，`+`运算符则会执行字符串拼接，两侧操作数调用`toString`方法。对象调用`toString()`后是`"[object Object]"`，因此返回`"[object Object]2"`。
>
> 经试验，对象在浏览器和node的`toString()`结果都是`"[object Object]"`而非`"[Object object]"`。

### 104. 结果是什么？（`Promise`）【复习】

```javascript
Promise.resolve(5)
```

- A: `5`
- B: `Promise {<pending>: 5}`
- C: `Promise {<fulfilled>: 5}`
- D: `Error`

> **答案：C**
>
> 静态方法`Promise.resolve()`返回一个解决状态的`Promise`。它可以传递解决值，但要通过`.then()`方法或`await`关键字才能取得。
>
> 事实上，`Promise.resolve(5)`等同于：
>
> ```javascript
> new Promise((resolve, reject) => {
>  resolve(5);
> }
> ```
>
> 只是写起来更为简略了。

### 105. 输出什么？（默认参数、对象引用）

```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)
```

- A: `Not the same!`
- B: `They are the same!`
- C: `ReferenceError`
- D: `SyntaxError`

> **答案：B**
>
> 只传入一个参数后，`person1`和`person2`都指向`person`所代表的对象，用`===`比较它们时，比较的是它们的引用，返回`true`。

### 106. 输出什么？（对象属性）

```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
```

- A: `true`
- B: `false`
- C: `undefined`
- D: `TypeError`

> **答案：D**
>
> JS中获取对象的属性可以使用点表示法或括号表示法，例如`a.b`或`a["b"]`，这两者优先级相同。
>
> 因此上述代码中，首先获取`colorConfig.colors`得到`undefined`，再尝试访问`undefined[1]`时抛出`TypeError: Cannot read property '1' of undefined`。
>
> 要想返回预期的结果，可以使用`colorConfig[colors[1]]`。

### 107. 输出什么？（字符串）

```javascript
console.log('❤️' === '❤️')
```

- A: `true`
- B: `false`

> **答案：A**
>
> 与其他语言不同，字符串在JS中是基本类型，基本类型只比较值是否相同，因此返回`true`。

### 108. 哪些方法修改了原数组？（数组）

```javascript
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice`
- D: `splice`

> **答案：D**
>
> `map`、`filter`均返回一个新数组。`find`返回第一个满足条件的元素本身。`reduce`返回一个数组逐一计算后压缩的值。`slice`返回原数组的切片（实际上只要两个参数），不改变原数组。`splice`将原数组特定位置删除和添加一定的元素，改变了原数组。

### 109. 输出什么？（字符串、对象引用）

```javascript
const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }

info.favoriteFood = '🍝'

console.log(food)
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

> **答案：A**
>
> 字符串是基本类型，当改变`info`的`favorite`属性时，`food[0]`并没有被改变。因此返回原数组。
>
> 第46题与此相似但有不同之处。它是两个地方引用了同一个对象，两者之间并没有关联，当其中一个地方改变引用时，另一个地方依然保持对原对象的引用。

### 110. 这个函数干了什么？（`JSON`）

```javascript
JSON.parse()
```

- A: Parses JSON to a JavaScript value
- B: Parses a JavaScript object to JSON
- C: Parses any JavaScript value to JSON
- D: Parses JSON to a JavaScript object only

> **答案：A**
>
> `JSON.parse()`可以将`JSON`字符串转为JS值。注意，`JSON`本质上是字符串，是JS对象的字符串表示形式。

### 111. 输出什么？（变量声明）

```javascript
let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()
```

- A: Lydia
- B: Sarah
- C: `undefined`
- D: `ReferenceError`

> **答案：D**
>
> 我们可能认为`console.log(name)`中的`name`是外部的`name`。但是，`let`声明的变量会进行提升并形成**暂时性死区**。函数中的`let name`被提升到`console.log(name)`之前，这时JS认为这里的`name`是函数内部的`name`，会抛出`ReferenceError: Cannot access 'name' before initialization`。

### 112. 输出什么？（生成器）【复习】

```javascript
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne()
const two = generatorTwo()

console.log(one.next().value)
console.log(two.next().value)
```

- A: `a` and `a`
- B: `a` and `undefined`
- C: `['a', 'b', 'c']` and `a`
- D: `a` and `['a', 'b', 'c']`

> **答案：C**
>
> `yield`可以暂停生成器函数的执行，并将`yield`表达式的值传递给迭代对象。因此输出`['a', 'b', 'c']`。
>
> `yield*`也会暂停生成器函数的执行，不同的是，生成器这时每次`yield`的值是`yield*`对其后面的表达式（可迭代对象或生成器）进行`yield`的值。因此输出数组`['a', 'b', 'c']`的第一个`yield`值即`'a'`。
>
> 对`one`和`two`依次迭代会得到：
>
> ```javascript
> console.log(one.next().value) // ['a', 'b', 'c']
> console.log(one.next().value) // undefined
> 
> console.log(two.next().value) // 'a'
> console.log(two.next().value) // 'b'
> console.log(two.next().value) // 'c'
> console.log(two.next().value) // undefined
> ```

### 113. 输出什么？（立即执行函数、字符串模板）

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

> **答案：A**
>
> 字符串模板内是一个立即执行函数，返回结果为`'I love'`，插值后得到结果。

### 114. 将会发生什么？（`setInterval`）【待补充】

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
```

- A: `setInterval` 的回调不会被调用
- B: `setInterval` 的回调被调用一次
- C: `setInterval` 的回调仍然会被每秒钟调用
- D: 我们从没调用过 `config.alert()`, config 为 `null`

> **答案：C**
>
> 一般情况下，如果对象被赋值为`null`，对象会被垃圾回收，因为没有指向对象的引用了。之前遇到过的一些例外是，如果两个地方引用了同一个对象，当其中一个地方赋值为`null`时，另一个地方依然保持对原对象的引用，因此对象不会被回收。
>
> 而`setInterval`里的回调函数的上下文被绑定到了`config`对象上，即使`config`被置为`null`，但对象不会被回收，因此回调依然会被调用。

### 115. 哪一个方法会返回 `'Hello world!'` ？（`Map`集合、对象引用）

```javascript
const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting')
```

- A: 1
- B: 2
- C: 2 and 3
- D: All of them

> **答案：B**
>
> `myMap`里添加了一个键值对，键是`myFunc`即`() => 'greeting'`函数，值是`'Hello world!'`。
>
> 1的键是`'greeting'`而非`() => 'greeting'`，因此无法取得。3的键虽然也是`() => 'greeting'`，但它与`myFunc`不是一个对象，因此无法取得。

### 116. 输出什么？（默认参数、扩展运算符）

```javascript
const person = {
  name: "Lydia",
  age: 21
}

const changeAge = (x = { ...person }) => x.age += 1
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1
  x.name = "Sarah"
}

changeAge(person)
changeAgeAndName()

console.log(person)
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

> **答案：C**
>
> `changeAge()`传入了参数，因此改变的`x.age`就是`person.age`。
>
> `changeAgeAndName()`没有传入参数，`x`使用默认值`{ ...person }`，也就是`person`的复制品，它不会修改原对象`person`。

### 117. 下面哪个选项将会返回 `6`？（扩展运算符）

```javascript
function sumValues(x, y, z) {
	return x + y + z;
}
```

- A: `sumValues([...1, 2, 3])`
- B: `sumValues([...[1, 2, 3]])`
- C: `sumValues(...[1, 2, 3])`
- D: `sumValues([1, 2, 3])`

> **答案：C**
>
> 扩展运算符可以拆开可迭代对象，例如将`[1, 2, 3]`拆成`1, 2, 3`，它们可以传递给函数做参数。

### 118. 输出什么？（赋值）

```javascript
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```

- A: `🤠`
- B: `🥰`
- C: `SyntaxError`
- D: `ReferenceError`

> **答案：B**
>
> 赋值表达式的返回值是赋值结果，因此`(num += 1)`的值就是`num`的结果`2`，因此返回`list[2]`。

### 119. 输出什么？（`?.`操作符）

```javascript
const person = {
	firstName: "Lydia",
	lastName: "Hallie",
	pet: {
		name: "Mara",
		breed: "Dutch Tulip Hound"
	},
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
```

- A: `undefined` `undefined` `undefined` `undefined`
- B: `Mara` `undefined` `Lydia Hallie` `ReferenceError`
- C: `Mara` `null` `Lydia Hallie` `null`
- D: `null` `ReferenceError` `null` `ReferenceError`

> **答案：B**
>
> ES10提出可选链操作符`?.`，可以防止在比较长的属性链上（如`a.b.c`），出现对`undefined`或`null`求属性的情况，类似于以前`a.b && a.b.c`或`a.b ? a.b.c : undefined`的写法。在值不为`undefined`或`null`时，`?.`相当于`.`，可以获得属性值，但当遇到`undefined`或`null`时，表达式会短路并返回`undefined`。`?.`还可用于函数或数组，当对象的函数名属性不为`undefined`或`null`时，`?.()`相当于`()`，`?.[]`相当于`[]`。
>
> 因此对于`person.pet?.name`，输出`person.pet.name`即`"Mara"`。对于`person.pet?.family?.name`，由于`person.pet.family`为`undefined`，输出`undefined`。对于`person.getFullName?.()`，输出`person.getFullName()`即`Lydia Hallie`。对于`member.getLastName?.()`，由于`member`没有定义，抛出`ReferenceError: member is not defined`。

### 120. 输出什么？（数组`indexOf`）

```javascript
const groceries = ["banana", "apple", "peanuts"];

if (groceries.indexOf("banana")) {
	console.log("We have to buy bananas!");
} else {
	console.log(`We don't have to buy bananas!`);
}
```

- A: We have to buy bananas!
- B: We don't have to buy bananas
- C: `undefined`
- D: `1`

> **答案：B**
>
> 数组的`indexOf`方法返回所找元素第一次在数组出现的索引。`groceries.indexOf("banana")`返回`0`，`0`被认为是`falsy`，因此输出`"We don't have to buy bananas!"`。
>
> 如果想要通过`if`判断元素是否在数组中出现，可以用`if (groceries.indexOf("banana") > -1)`，因为`indexOf`未找到时返回`-1`。

### 121. 输出什么？（`getter-setter`）【复习】

```javascript
const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	}
};

console.log(config.language);
```

- A: `function language(lang) { this.languages.push(lang }`
- B: `0`
- C: `[]`
- D: `undefined`

> **答案：D**
>
> JS可以为对象设置`getter`和`setter`伪属性，在属性名前加`get`和`set`即可。当调用属性名时，`getter`函数起作用，返回`getter`的返回值。当给属性赋值时，`setter`函数起作用，执行相关操作。
>
> 本题中，虽然`setter`返回了值，但`config.language`这个操作是无法返回其值的（因为它调用的是`getter`），所以这里返回`undefined`。
>
> 下面的例子可以帮助理解`getter`和`setter`的调用：
>
> ```javascript
> const obj = {
> a: 1,
> get b() {
>  console.log('getter called');
>  return this.a * 3;
> },
> set b(value) {
>  console.log('setter called');
>  this.a = value / 3;
> }
> }
> 
> console.log(obj.b); // getter called, 3
> obj.b = 30;  // setter called
> console.log(obj.a); // 10
> ```

### 122. 输出什么？（`typeof`、逻辑非运算符）

```javascript
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
```

- A: `false` `true`
- B: `true` `false`
- C: `false` `false`
- D: `true` `true`

> **答案：C**
>
> `typeof name`为`"string"`。但是！逻辑非运算符`!`比全等运算符`===`具有更高的优先级，它先与`typeof name`结合，返回`!typeof name`即`!"string"`即`false`，因此`false`与一个字符串做全等判断，始终返回`false`。
>
> 要想判断`name`的属性，应该使用`typeof name !== "object"`这样的形式。

### 123. 输出什么？（箭头函数）

```javascript
const add = x => y => z => {
	console.log(x, y, z);
	return x + y + z;
};

add(4)(5)(6);
```

- A: `4` `5` `6`
- B: `6` `5` `4`
- C: `4` `function` `function`
- D: `undefined` `undefined` `6`

> **答案：A**
>
> `add`是一个函数，它的参数是`x`，返回值是一个函数，记为`f1`。`f1`的参数是`y`，返回值是一个函数，记为`f2`。`f2`的参数是`z`，函数体是大括号里的内容。
>
> 因此`add(4)(5)(6)`是依次调用了`add(4)`、`f1(5)`、`f2(6)`，因此输出`4 5 6`。
>
> 注意，`f2`函数体是可以访问`x`和`y`的，因为函数在其作用域内。

### 124. 输出什么？（`async-await`、生成器）【复习】

```javascript
async function* range(start, end) {
	for (let i = start; i <= end; i++) {
		yield Promise.resolve(i);
	}
}

(async () => {
	const gen = range(1, 3);
	for await (const item of gen) {
		console.log(item);
	}
})();
```

- A: `Promise {1}` `Promise {2}` `Promise {3}`
- B: `Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`
- C: `1` `2` `3`
- D: `undefined` `undefined` `undefined`

> **答案：C**
>
> 对于`gen`，它是一个依次生成`Promise {1}`、`Promise {2}`、`Promise {3}`的生成器。
>
> 对于`for await ... of`的迭代，由于函数外没有宏任务，所以它依次完成3个微任务，即取得三个`Promise`的解决值作为`item`，然后循环体打印。
>
> 如果函数外还有宏任务，就会先执行宏任务，例如：
>
> ```javascript
> console.log(1);
> 
> (async () => {
> console.log(2);
> const gen = range(1, 3);
> console.log(3);
> for await (const item of gen) {
>  console.log(4, item);
> }
> console.log(5);
> })();
> 
> console.log(6);
> 
> // 输出顺序：1 => 2 => 3 => 6 => 4 1 => 4 2 => 4 3 => 5
> ```

### 125. 输出什么？（解构、函数参数）

```javascript
const myFunc = ({ x, y, z }) => {
	console.log(x, y, z);
};

myFunc(1, 2, 3);
```

- A: `1` `2` `3`
- B: `{1: 1}` `{2: 2}` `{3: 3}`
- C: `{ 1: undefined }` `undefined` `undefined`
- D: `undefined` `undefined` `undefined`

> **答案：D**
>
> 函数只有一个形参，多余传进的参数会被忽略，实际上只把`1`传给了`{ x, y, z }`。
>
> `{ x, y, z }`希望被一个有`x`、`y`、`z`三个属性的对象传递，但`1`没有这三个属性，因此都返回`undefined`。
>
> 如果我们传递的是`1`有的属性，则会输出，例如：
>
> ```javascript
> const myFunc = ({ x, y, toString: z }) => {
> console.log(x, y, z);
> };
> 
> myFunc(1, 2, 3);  // undefined undefined [Function: toString]
> ```

### 126. 输出什么？（`Intl`）【复习】

```javascript
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat(
    'en-US',
    { style: 'unit', unit: 'mile-per-hour' }
  ).format(speed)

  const formattedAmount = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD' }
  ).format(amount)

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`
}

console.log(getFine(130, 300))
```

- A: The driver drove 130 and has to pay 300
- B: The driver drove 130 mph and has to pay $300.00
- C: The driver drove undefined and has to pay undefined
- D: The driver drove 130.00 and has to pay 300.00

> **答案：B**
>
> `Intl`是JS中的一个国际化类，可以对数字、日期等进行格式化。
>
> `Intl.NumberFormat()`是一个构造器，用来实例化一个数字格式化工具对象，它调用`format`方法就可以格式化一个数字，返回一个字符串。
>
> `Intl.NumberFormat()`有两个参数，分别是`locales`和`options`：
>
> - `locales`是表示地区的字符串，如`"en-us"`、`zh-Hans-CN`。
> - `options`是表示选项的对象，包含`"style"`、`"decimal"`、`"currency"`、`"percent"`、`"unit"`等属性。
>
> 第一个例子中，130的`format`结果为单位，即`"130 mph"`；第二个例子中，`300`的`format`结果为货币，即`"$300.00"`。

### 127. 输出什么？（解构）

```javascript
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
```

- A: `["👻", "🎃", "🕸"]`
- B: `["👻", "🎃", "🕸", "💀"]`
- C: `["👻", "🎃", "🕸", { item: "💀" }]`
- D: `["👻", "🎃", "🕸", "[object Object]"]`

> **答案：B**
>
> 第二行是一个解构语法，相当于`spookyItems[3] = "💀"`，因此就是对数组元素赋值，更改了原数组。

### 128. 输出什么？（`NaN`）【复习】

```javascript
const name = "Lydia Hallie";
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));
```

- A: `true` `false` `true` `false`
- B: `true` `false` `false` `false`
- C: `false` `false` `true` `false`
- D: `false` `true` `false` `true`

> **答案：C**
>
> `Number.isNaN()`方法是ES6新加的，它首先判断是否为`Number`类型，对于非`number`一律返回`false`；对于`number`类型再判断是否是`NaN`。
>
> 全局的`isNaN()`则会先将参数转换为`Number`类型，再判断是否是`NaN`。因此字符串`"Lydia Hallie"`转为`Number`类型为`NaN`，返回`true`。

### 129. 输出什么？（变量声明）

```javascript
const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();
```

- A: `"number"`
- B: `"string"`
- C: `undefined`
- D: `ReferenceError`

> **答案：D**
>
> 同第111题。

### 130. 输出什么？（`async-await`、`try-catch`）

```javascript
const myPromise = Promise.resolve("Woah some cool data");

(async () => {
	try {
		console.log(await myPromise);
	} catch {
		throw new Error(`Oops didn't work`);
	} finally {
		console.log("Oh finally!");
	}
})();
```

- A: `Woah some cool data`
- B: `Oh finally!`
- C: `Woah some cool data` `Oh finally!`
- D: `Oops didn't work` `Oh finally!`

> **答案：C**
>
> 当函数运行到`await`时，函数退出运行并等待`Promise`完成，由于没有其他宏任务（`catch`和`finally`都只能等待`try`块完成才能进行），所以函数马上恢复运行并输出`Promise`解决值`"Woah some cool data"`。`catch`没有捕捉到错误，不执行，执行`finally`块，即输出`"Oh finally!"`。

### 131. 输出什么？（数组`flat`）【复习】

```javascript
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

> **答案：B**
>
> `flat`是数组新的方法，它可以使一个数组扁平化，也就是数组嵌套数组时，将内层数组拆开，它的使用方法如下：
>
> - `flat()`接收一个参数`depth`，表示拍平层数，当`depth = Infinity`时`flat`将数组直接拍平为一维数组，当`depth`省略时默认只拍平一层
> - `flat()`会自动忽略数组中的空位

> **扩展：**
>
> 利用`reduce`实现自己的`flatten`函数：
>
> ```javascript
> const flatten = (arr, depth) => {
> if (depth === 0) return arr;
> return arr.reduce((acc, val) => {
>  if (Array.isArray(val)) {
>    return acc.concat(flatten(val, depth - 1));
>  }
>  return acc.concat(val);
> }, []);
> }
> ```

### 132. 输出什么？（`this`指向、对象引用）

```javascript
class Counter {
	constructor() {
		this.count = 0;
	}

	increment() {
		this.count++;
	}
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
```

- A: `0`
- B: `1`
- C: `2`
- D: `3`

> **答案：D**
>
> `counterOne`和`counterTwo`指向同一个`Counter`对象，`counterTwo`对`this.count`的操作会影响到`counterOne`。

### 133. 输出什么？（`async-await`、`Promise`）【复习】

```javascript
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
	myPromise.then(res => res).then(res => console.log(res));
	setTimeout(() => console.log("Timeout!"), 0);
	console.log("Last line!");
}

async function funcTwo() {
	const res = await myPromise;
	console.log(await res);
	setTimeout(() => console.log("Timeout!"), 0);
	console.log("Last line!");
}

funcOne();
funcTwo();
```

- A: `Promise! Last line! Promise! Last line! Last line! Promise!`
- B: `Last line! Timeout! Promise! Last line! Timeout! Promise!`
- C: `Promise! Last line! Last line! Promise! Timeout! Timeout!`
- D: `Last line! Promise! Promise! Last line! Timeout! Timeout!`

> **答案：D**
>
> 分析程序运行过程：
>
> - `funcOne()`运行，将`myPromise`的解决值（即`"Promise!"`，原因参考扩展）加入微任务队列
> - 将`setTimeout`回调加入新的宏任务队列，延时为立即执行
> - **输出`"Last line!"`**，`funcOne()`结束运行
> - 主线程宏任务没有结束，`funcTwo()`运行
> - 遇到`await`，将`myPromise`的解决值（即`"Promise!"`）加入微任务队列，函数退出运行
> - 此时主线程已经没有宏任务，开始执行微任务
> - 微任务1：`funcOne()`取得`myPromise`的解决值，即`"Promise!"`，形成一个解决值为`"Promise!"`的`Promise`，继续调用`then`，加入微任务队列
> - 微任务2：`funcTwo()`取得`myPromise`的解决值，即`"Promise!"`，函数恢复运行，赋值给`res`；运行到`await res`，将`res`的值加入微任务队列，函数退出运行
> - 微任务3：`funcOne()`取得新`Promise`的解决值，即`"Promise!"`，将其打印，**输出`"Promise!"`**
> - 微任务4：`funcTwo()`取得`res`的值，即`"Promise!"`，函数恢复运行，将其打印，**输出`"Promise!"`**
> - `funcTwo()`继续运行，将`setTimeout`回调加入新的宏任务队列，延时为立即执行
> - **输出`"Last line!"`**，`funcTwo()`结束运行
> - 微任务队列已经清空，开始执行新的宏任务队列
> - 执行`funcOne()`中`setTimeout`的回调，**输出`"Timeout!"`**
> - 执行`funcTwo()`中`setTimeout`的回调，**输出`"Timeout!"`**

> **扩展：**
>
> 当`Promise.resolve()`的参数仍是一个`Promise`时，等同于空包装，即`Promise.resolve(Promise.resolve("Promise!"))`全等于`Promise.resolve("Promise!")`，并且新包装的`Promise`保持内层`Promise`的状态。

### 134. 我们怎样才能在 `index.js` 中调用 `sum.js?` 中的 `sum`？（模块化）【复习】

```javascript
// sum.js
export default function sum(x) {
	return x + x;
}

// index.js
import * as sum from "./sum";
```

- A: `sum(4)`
- B: `sum.sum(4)`
- C: `sum.default(4)`
- D: 默认导出不用 `*` 来导入，只能具名导出

> **答案：C**
>
> `import * as sum`的语法会为`index.js`创建一个名为`sum`的对象，默认导出会作为`sum`的`default`属性，命名导出会作为`sum`对应属性名的属性。
>
> 本题中，`sum`是这样的一个对象：
>
> ```javascript
> { default: function sum(x) { return x + x } }
> ```
>
> 因此要使用`sum`函数，就通过`sum.default()`调用即可。

### 135. 输出什么？（`Proxy`）【复习】

```javascript
const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
```

- A: `Added a new property!`
- B: `Accessed a property!`
- C: `Added a new property!` `Accessed a property!`
- D: 没有任何输出

> **答案：C**
>
> 代理是ES6新增的模式。通过`Proxy`构造函数新增一个代理对象，代理对象可以通过代理对目标对象进行操作。
>
> `Proxy`构造函数接收两个参数`target`和`handler`。`target`代表目标对象，对代理对象的任意操作可以应用到目标对象，如：
>
> ```javascript
> const obj = { id: 'target' };
> const handler = {};
> const proxy = new Proxy(obj, handler);
> console.log(proxy.id);  // target
> proxy.id = 'foo';
> console.log(proxy.id);  // foo
> console.log(obj.id);    // foo
> console.log(obj instanceof Object); // true
> console.log(proxy instanceof Proxy);  // TypeError: Function has non-object prototype 'undefined' in instanceof check
> console.log(proxy === obj);  // false
> ```
>
> 由于`Proxy.prototype`是`undefined`，所以无法通过`instanceof`得到`proxy`是否是`Proxy`的实例。
>
> `handler`中可以设置捕获器，如`set()`和`get()`捕获器会在设置属性值和获取属性值时被调用，如：
>
> ```javascript
> const obj = { id: 'target' };
> const handler = {
> get: function (target, name) {
>  console.log('get', name);
>  return name in target ? target[name] : 'default';
> },
> set: function (target, name, value) {
>  console.log('set', name, value);
>  target[name] = value;
> }
> };
> const proxy = new Proxy(obj, handler);
> console.log(proxy.id);  // get id => target
> console.log(proxy.name);  // get name => default
> proxy.id = 'proxy'; // set id proxy
> ```

### 136. 以下哪一项会对对象 `person` 有副作用？（对象`seal`）【复习】

```javascript
const person = { name: "Lydia Hallie" };

Object.seal(person);
```

- A: `person.name = "Evan Bacon"`
- B: `person.age = 21`
- C: `delete person.name`
- D: `Object.assign(person, { age: 21 })`

> **答案：A**
>
> `Object.seal()`静态方法使对象**密封**，它阻止像对象添加、删除属性，但可以更新或修改对象的现有属性。
>
> 可以通过`Object.isSealed()`静态方法检查对象是否被密封。
>
> 它与`Object.freeze()`类似，但`freeze`使对象也无法修改现有属性。

### 137. 以下哪一项会对对象 `person` 有副作用？（对象`freeze`）【复习】

```javascript
const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person);
```

- A: `person.name = "Evan Bacon"`
- B: `delete person.address`
- C: `person.address.street = "101 Main St"`
- D: `person.pet = { name: "Mara" }`

> **答案：C**
>
> 参考第75题，`Object.freeze()`执行的是浅冻结，也就是`person.address`没有被冻结，我们仍可以对其内部的属性进行修改。

### 138. 输出什么？（默认参数）

```javascript
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
	console.log(num, value);
}

myFunc();
myFunc(3);
```

- A: `2` `4` and `3` `6`
- B: `2` `NaN` and `3` `NaN`
- C: `2` `Error` and `3` `6`
- D: `2` `4` and `3` `Error`

> **答案：A**
>
> 默认参数不仅可以是常量、变量，还可以是表达式。不传入参数时，相当于传入`2`和`add(2)`即`4`，传入`3`时，相当于传入`3`和`add(3)`即`6`。

### 139. 输出什么？（类的成员）【复习】

```javascript
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)
```

- A: `10`
- B: `11`
- C: `undefined`
- D: `SyntaxError`

> **答案：D**
>
> ES2020中，`#`前缀的变量是类的私有成员，在类的外部无法调用，尝试调用会抛出`SyntaxError: Private field '#number' must be declared in an enclosing class`。

### 140. 选择哪一个？（生成器）【复习】

```javascript
const teams = [
	{ name: "Team 1", members: ["Paul", "Lisa"] },
	{ name: "Team 2", members: ["Laura", "Tim"] }
];

function* getMembers(members) {
	for (let i = 0; i < members.length; i++) {
		yield members[i];
	}
}

function* getTeams(teams) {
	for (let i = 0; i < teams.length; i++) {
		// ✨ SOMETHING IS MISSING HERE ✨
	}
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }
```

- A: `yield getMembers(teams[i].members)`
- B: `yield* getMembers(teams[i].members)`
- C: `return getMembers(teams[i].members)`
- D: `return yield getMembers(teams[i].members)`

> **答案：B**
>
> 首先观察生成器`getMembers()`，它的作用是给定一个`members`数组，依次`yield`它的每个成员。
>
> 再观察生成器`getTeams()`和`obj`的输出结果，它输出了每个`team`的`members`里每个`member`的值。
>
> 因此注释处应使用`yield*`，表达式为`getMembers(team[i].members)`，因为`yield*`对可迭代对象依次做`yield`，这样`obj`每次`yield`的就是`yield*`后面的每个`yield`值。

### 141. 输出什么？（默认参数）

```javascript
const person = {
	name: "Lydia Hallie",
	hobbies: ["coding"]
};

function addHobby(hobby, hobbies = person.hobbies) {
	hobbies.push(hobby);
	return hobbies;
}

addHobby("running", []);
addHobby("dancing");
addHobby("baking", person.hobbies);

console.log(person.hobbies);
```

- A: `["coding"]`
- B: `["coding", "dancing"]`
- C: `["coding", "dancing", "baking"]`
- D: `["coding", "running", "dancing", "baking"]`

> **答案：C**
>
> 对于`"running"`，传入的`hobbies`是`[]`，不会影响原数组。
>
> 而对于`"dancing"`和`"baking"`，`hobbies`都表示`person.hobbies`本身，因此会影响原数组。

### 142. 输出什么？（类的继承）

```javascript
class Bird {
	constructor() {
		console.log("I'm a bird. 🦢");
	}
}

class Flamingo extends Bird {
	constructor() {
		console.log("I'm pink. 🌸");
		super();
	}
}

const pet = new Flamingo();
```

- A: `I'm pink. 🌸`
- B: `I'm pink. 🌸` `I'm a bird. 🦢`
- C: `I'm a bird. 🦢` `I'm pink. 🌸`
- D: Nothing, we didn't call any method

> **答案：B**
>
> 当使用`new`创造`Flamingo`的实例时，调用`Flamingo`的构造函数，首先输出`"I'm pink. 🌸"`，然后调用`super()`即父类`Bird`的构造函数，输出`"I'm a bird. 🦢"`。

### 143. 哪一个选项会导致报错？（数组、变量声明）

```javascript
const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

/* 1 */ emojis.push("🦌");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "🥂"];
/* 4 */ emojis.length = 0;
```

- A: 1
- B: 1 and 2
- C: 3 and 4
- D: 3

> **答案：D**
>
> `emojis`是`const`变量，它不可以被重新赋值。但是修改数组元素、长度都是可以的。

### 144. 我们需要向对象 `person` 添加什么，以致执行 `[...person]` 时获得形如 `["Lydia Hallie", 21]` 的输出？（`Symbol`、生成器、扩展运算符）【复习】

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- A: 不需要，对象默认就是可迭代的
- B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
- C: `*[Symbol.iterator]() { yield* Object.values(this) }`
- D: `*[Symbol.iterator]() { for (let x in this) yield this }`

> **答案：C**
>
> 对象默认是不可迭代的。想要其迭代，可为其添加`Symbol.iterator`方法，并赋一个生成器函数。
>
> 观察到`...person`的结果为`"Lydia Hallie", 21`，即生成器函数应`yield`对象的每一个属性值。使用`yield* Object.values(this)`即可实现。
>
> 如果使用B的写法，应把`yield*`改为`yield`。

### 145. 输出什么？（`forEach`、真值假值）

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1
})

console.log(count)
```

- A: 1
- B: 2
- C: 3
- D: 4

> **答案：C**
>
> 只有`0`被认为是falsy，其他三个数都被认为是truthy，因此返回`3`。

### 146. 输出什么？（`?.`操作符）

```javascript
function getFruit(fruits) {
	console.log(fruits?.[1]?.[1])
}

getFruit([['🍊', '🍌'], ['🍍']])
getFruit()
getFruit([['🍍'], ['🍊', '🍌']])
```

- A: `null`, `undefined`, 🍌
- B: `[]`, `null`, 🍌
- C: `[]`, `[]`, 🍌
- D: `undefined`, `undefined`, 🍌

> **答案：D**
>
> 参考第119题。

### 147. 输出什么？（对象引用）

```javascript
class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count ++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)
```

- A: `0`
- B: `1`
- C: `undefined`
- D: `ReferenceError`

> **答案：A**
>
> `calc`后的`new Calc()`和下一行的`new Calc()`并不是同一个对象。`calc`的`count`在原型链上并没有被分享出去，而是属于它自己，因此没有被修改。

### 148. 输出什么？（解构、对象`assign`）

```javascript
const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
		Object.assign(user, { email })
	}

	if (password) {
		user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com" })

console.log(updatedUser === user)
```

- A: `false`
- B: `true`
- C: `TypeError`
- D: `ReferenceError`

> **答案：B**
>
> 函数`updateUser`的目的是修改`user`中的`email`和`password`属性，并返回`user`，因此`updatedUser`和`user`是同一个对象。
>
> `Object.assign`将多个对象合并到第一个对象，有同名属性将覆盖，因此`Object.assign(user, { email })`等同于`user.email = email`。

### 149. 输出什么？（数组）

```javascript
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
```

- A: `['🍌', '🍊', '🍎']`
- B: `['🍊', '🍎']`
- C: `['🍇', '🍊', '🍎']`
- D: `['🍇', '🍌', '🍊', '🍎']`

> **答案：C**
>
> `slice`返回原数组的切片，不改变原数组。
>
> `splice`将数组中的元素删除并替换，`splice(0, 1)`从数组`0`位置开始删除`1`个元素。
>
> `unshift`向数组前端添加元素。

### 150. 输出什么？（扩展运算符、对象属性）

```javascript
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
```

- A: `{ emoji: "🐶", name: "Mara" }`
- B: `{ emoji: "🐈", name: "Sara" }`
- C: `undefined`
- D: `ReferenceError`

> **答案：B**
>
> 首先`...`扩展运算符将`dog`、`cat`的属性拆开并添加到新对象中。
>
> 由于`dog`、`cat`是对象，它们作为`animals`的属性都会转为字符串`"[object Object]"`，所以两步操作其实都是对`animals["[object Object]"]`赋值，打印的也是`animals["[object Object]"]`，最终输出`{ emoji: "🐈", name: "Sara" }`。

### 151. 输出什么？（`this`指向）

```javascript
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
```

- A: `my@email.com`
- B: `new@email.com`
- C: `undefined`
- D: `ReferenceError`

> **答案：A**
>
> `updateEmail`是一个箭头函数，它的`this`应指向作用域上下文的`this`，即全局对象。因此无论如何调用，`updateEmail`都只会改变全局对象的`email`属性，而非`obj`的`email`属性。

### 152. 输出什么？（`async-await`、`Promise`）【复习】

```javascript
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
```

- A: `[['First', 'Second'], ['Fourth']]`
- B: `[['First', 'Second'], ['Third', 'Fourth']]`
- C: `[['First', 'Second']]`
- D: `'Third'`

> **答案：D**
>
> `Promise.all()`静态方法返回一个新`Promise`，新`Promise`等待内部的所有`Promise`解决后再解决。如果有一个`Promise`为`rejected`，则最终返回以它为`reason`的`Promise <rejected>`。如果所有`Promise`都`resolved`，返回的`Promise`解决值为所有`Promise`解决值按迭代顺序的排列的数组。
>
> 本题中，`Promise.all([promise1, promise2])`应返回一个`resolved`的`Promise {['First', 'Second']}`，`res1`为解决值`['First, Second']`。`Promise.all([promise3, promise4])`应返回一个`rejected`的`Promise {'Third'}`。
>
> 由于`await`获取到了一个`rejected`的`Promise`，它将**直接结束执行**并传递这个`Promise`，因此`runPromises()`返回的是`Promise { <rejected> 'Third' }`。
>
> 因此，这个拒绝值`3`被下面的`catch`捕获，输出`'Third'`。

### 153. 哪个作为`method`的值可以打印`{ name: "Lydia", age: 22 }`？（对象）【复习】

```javascript
const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ?? */
Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
```

- A: `entries`
- B: `values`
- C: `fromEntries`
- D: `forEach`

> **答案：C**
>
> `Object.fromEntries()`静态方法可以返回一个对象，它接收一个二维数组，二维数组的每一个子数组都是键值对，形如`[["name", "Lydia"], ["age", 22]]`。

### 154. 输出什么？（解构、正则表达式、默认参数、真值假值）

```javascript
const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)
```

- A: `{ email: "my@email.com", address: null }`
- B: `{ email: "my@email.com" }`
- C: `{ email: "my@email.com", address: {} }`
- D: `{ email: "my@email.com", address: undefined }`

> **答案：C**
>
> 参数传入函数后被解构，即`email = "my@email.com"`和`address = {}`。
>
> `email`符合正则表达式，`test`后返回`true`。`{}`被认为是`truthy`，因此返回本身。

### 155. 输出什么？（`typeof`、逻辑非运算符）

```javascript
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
```

- A: `It's not a string!`
- B: `Yay it's a string!`
- C: `TypeError`
- D: `undefined`

> **答案：B**
>
> 同第122题。
>
> `typeof randomValue`为`"number"`。但是！逻辑非运算符`!`比全等运算符`===`具有更高的优先级，它先与`typeof randomValue`结合，返回`!typeof randomValue`即`!"number"`即`false`，因此`false`与一个字符串做全等判断，始终返回`false`。