function Arr1(...args: any): void {
  console.log(arguments)
  //错误的arguments 是类数组不能这样定义
  let arr: number[] = arguments
  console.log(arr)
}
Arr1(111, 222, 333)

function Arr2(...args: any): void {
  console.log(arguments)
  //ts内置对象IArguments 定义
  let arr: IArguments = arguments
  console.log(arr)
}
Arr2(111, 222, 333)

//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}
