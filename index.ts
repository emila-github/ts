abstract class A {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  print(): string {
    return this.name
  }
  // 在A类定义了 getName 抽象方法但未实现
  abstract getName(): string
}

// new A() // 抽象类无法被实例化

class B extends A {
  constructor() {
    super('迪迪')
  }
  getName(): string {
    return this.name
  }
}
let b = new B()
console.log(b.getName())
