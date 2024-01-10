//定义类
class Person {
  // 使用public 修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public
  public name: string
  // 使用  private 修饰符 代表定义的变量私有的只能在内部访问 不能在外部访问
  private age: number
  // 使用  protected 修饰符 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问
  protected some: any

  constructor(name: string, age: number, some: any) {
    // 在TypeScript是不允许直接在constructor 定义变量的 需要在constructor上面先声明
    this.name = name
    this.age = age
    this.some = some
  }
  run() {}
}

let xiaoming = new Person('小明', 28, 1)
xiaoming.name
xiaoming.age
xiaoming.some

class Man extends Person {
  constructor() {
    super('小黑', 100, 2)
    console.log('Man constructor')
    console.log(this.name)
    console.log(this.age)
    console.log(this.some)
  }
  create() {
    console.log('Man create')
    console.log(this.name)
    console.log(this.age)
    console.log(this.some)
  }
}

let man = new Man()
man.name
man.age
man.some
