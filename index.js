var isString = function (str) { return typeof str === 'string'; };
var isNumber = function (num) { return typeof num === 'number'; };
var isFn = function (fn) { return typeof fn === 'function'; };
var isObj = function (obj) { return ({}.toString.call(obj) === '[object Object]'); };
var fn = function (data) {
    var value;
    if (isObj(data)) {
        Object.keys(data).forEach(function (key) {
            value = data[key];
            if (isString(value)) {
                data[key] = value.trim();
            }
            if (isNumber(value)) {
                data[key] = value.toFixed(2);
            }
            if (isFn(value)) {
                data[key](); //修改这儿
            }
        });
    }
};
var obj = {
    a: 100.22222,
    b: ' test  ',
    c: function () {
        console.log(this);
        return this.a;
    },
};
fn(obj);
