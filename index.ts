const queuedObserverList: Set<Function> = new Set()
const observe = (fn: Function) => {
  queuedObserverList.add(fn)
}
const observable = <T extends object>(obj: T) =>
  new Proxy(obj, {
    set(target, key, value, receiver) {
      queuedObserverList.forEach((fun) => fun())
      return Reflect.set(target, key, value, receiver)
    },
  })

const person = observable({ name: 'hello', age: 11 })
function print() {
  console.log(`${person.name}--${person.age}`)
}
observe(print)
person.name = 'hi'
person.name = 'hi2'
