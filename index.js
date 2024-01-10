var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//定义类
var Person = /** @class */ (function () {
    function Person(name, age, some) {
        // 在TypeScript是不允许直接在constructor 定义变量的 需要在constructor上面先声明
        this.name = name;
        this.age = age;
        this.some = some;
        // this.nb ='nb'  // 不可以通过this 去访问
        // this.staticFn() // 静态函数 同样也是不能通过this 去调用
    }
    // static 静态函数 同样也是不能通过 this 去调用 也是通过类名去调用
    Person.staticFn = function () {
        console.log('staticFn');
        return console.log(this.name);
    };
    Person.staticFn2 = function () {
        console.log('staticFn2');
        // 需注意： 如果两个函数都是static 静态的是可以通过this互相调用
        return this.staticFn();
    };
    Person.prototype.run = function () { };
    // 用static 定义的属性 不可以通过this 去访问 只能通过类名去调用
    Person.nb = '123';
    return Person;
}());
console.log('Person.nb', Person.nb);
Person.staticFn();
var xiaoming = new Person('小明', 28, 1);
xiaoming.name;
// xiaoming.age
// xiaoming.some
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        var _this = _super.call(this, '小黑', 100, 2) || this;
        console.log('Man constructor');
        console.log(_this.name);
        // console.log(this.age)
        console.log(_this.some);
        return _this;
    }
    Man.prototype.create = function () {
        console.log('Man create');
        console.log(this.name);
        // console.log(this.age)
        console.log(this.some);
    };
    return Man;
}(Person));
var man = new Man();
man.name;
// man.age
// man.some
