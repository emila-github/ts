// 1.字符串类型
var a = '123';
//普通声明
//也可以使用es6的字符串模板
var str = "dddd".concat(a);
console.log(str);
// 2.数字类型
var num = 123; //普通数字
var notANumber = NaN; //Nan
var infinityNumber = Infinity; //无穷大
var decimal = 6; //十进制
var hex = 0xf00d; //十六进制
var binary = 10; //二进制
var octal = 484; //八进制s
// 3.布尔类型
// let createdBoolean: boolean = new Boolean(1)
//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象
var n = null;
var u = undefined;
// tscconfig.json "strict": false 可以以下交差赋值
// n = u
// u = n
// 4.空值类型
function voidFn() {
    console.log('test void');
}
