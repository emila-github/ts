type Person = {
  name: string
  age: number
  sex: number
}
const proxy = (object: any, key: any) => {
  return new Proxy(object, {
    get(target, prop, receiver) {
      console.log('get')
      return Reflect.get(target, prop, receiver)
    },
    set(target, prop, value, receiver) {
      console.log('set')
      return Reflect.set(target, prop, value, receiver)
    },
  })
}

// const logAccess = (object: Person, key: 'name' | 'age' | 'sex') => {
//     return proxy(object, key)
// }
const logAccess = <T>(object: T, key: keyof T) => {
  return proxy(object, key)
}

let woman: Person = logAccess(
  {
    name: 'orange',
    sex: 0,
    age: 18,
  },
  'age'
)
woman.age = 16
console.log(woman)
