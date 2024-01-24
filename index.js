var Sub = /** @class */ (function () {
    function Sub() {
        this.attr = [];
    }
    Sub.prototype.add = function (a) {
        this.attr.push(a);
        return this.attr;
    };
    return Sub;
}());
var s = new Sub();
s.attr = [1, 2, 3];
s.add(4);
console.log(s.attr); // [ 1, 2, 3, 4 ]
var str = new Sub();
str.attr = ['a', 'b', 'c'];
str.add('d'); // [ 'a', 'b', 'c', 'd' ]
console.log(str.attr);
