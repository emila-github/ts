interface Obj {
  user: number[]
  add: (this: Obj, num: number) => void
  sub: (this: Obj, num: number) => void
  otherFn: (str: string) => string
}

// ts 可以定义this 的类型， 在js中无法使用 必须在第一个参数定义this 的类型
let obj: Obj = {
  user: [1, 2, 3],
  add(this: Obj, num: number) {
    this.user.push(num)
  },
  sub: function (this: Obj, num: number) {
    let findIndex = this.user.findIndex((item) => item === num)
    console.log('findIndex', findIndex)
    if (findIndex != -1) {
      this.user.splice(findIndex, 1)
    }
  },
  otherFn: (str) => {
    console.log(str)
    return str
  },
}

obj.add(4)
obj.otherFn('ttt')
console.log(obj)
obj.sub(2)
console.log(obj)
