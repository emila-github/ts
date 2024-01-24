function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let o = { a: 1, b: 'b', c: false }

prop(o, 'a')
// prop(o, 'd') //此时就会报错发现找不到
