// 1.字符串类型
let a: string = '123'
//普通声明

//也可以使用es6的字符串模板
let str: string = `dddd${a}`
console.log(str)

// 2.数字类型
let num: number = 123 //普通数字
let notANumber: number = NaN //Nan
let infinityNumber: number = Infinity //无穷大
let decimal: number = 6 //十进制
let hex: number = 0xf00d //十六进制
let binary: number = 0b1010 //二进制
let octal: number = 0o744 //八进制s

// 3.布尔类型
// let createdBoolean: boolean = new Boolean(1)
//这样会报错 应为事实上 new Boolean() 返回的是一个 Boolean 对象

let n: null = null
let u: undefined = undefined

// tscconfig.json "strict": false 可以以下交差赋值
// n = u
// u = n

// 4.空值类型
function voidFn(): void {
  console.log('test void')
}
