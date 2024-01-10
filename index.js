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
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    A.prototype.print = function () {
        return this.name;
    };
    return A;
}());
// new A() // 抽象类无法被实例化
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super.call(this, '迪迪') || this;
    }
    B.prototype.getName = function () {
        return this.name;
    };
    return B;
}(A));
var b = new B();
console.log(b.getName());
