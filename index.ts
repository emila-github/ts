interface PersonClass {
  get(type: boolean): boolean
}

interface PersonClass2 {
  set(): void
  asd: string
}

class A {
  name: string
  constructor() {
    this.name = '1234'
  }
}
// ts interface 定义类 使用关键字 implements   后面跟interface的名字多个用逗号隔开 继承还是用extends
class Person extends A implements PersonClass, PersonClass2 {
  asd: string
  constructor() {
    super()
    this.asd = 'asd'
  }
  get(type: boolean): boolean {
    return type
  }
  set(): void {}
}

let man = new Person()
console.log(man.name)
