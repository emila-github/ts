const isString = (str: any): str is string => typeof str === 'string'

const isNumber = (num: any): num is number => typeof num === 'number'

const isFn = (fn: any) => typeof fn === 'function'

const isObj = (obj: any) => ({}.toString.call(obj) === '[object Object]')

const fn = (data: any) => {
  let value
  if (isObj(data)) {
    Object.keys(data).forEach((key) => {
      value = data[key]
      if (isString(value)) {
        data[key] = value.trim()
      }
      if (isNumber(value)) {
        data[key] = value.toFixed(2)
      }
      if (isFn(value)) {
        data[key]() //修改这儿
      }
    })
  }
}
const obj = {
  a: 100.22222,
  b: ' test  ',
  c: function () {
    console.log(this)
    return this.a
  },
}

fn(obj)
