class Sub<T> {
  attr: T[] = []
  add(a: T): T[] {
    this.attr.push(a)
    return this.attr
  }
}

let s = new Sub<number>()
s.attr = [1, 2, 3]
s.add(4)
console.log(s.attr) // [ 1, 2, 3, 4 ]

let str = new Sub<string>()
str.attr = ['a', 'b', 'c']
str.add('d') // [ 'a', 'b', 'c', 'd' ]
console.log(str.attr)
