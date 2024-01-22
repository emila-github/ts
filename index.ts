const obj = {
  max: 5,
  current: 0,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        if (this.current == this.max) {
          return {
            value: undefined,
            done: true,
          }
        } else {
          return {
            value: this.current++,
            done: false,
          }
        }
      },
    }
  },
}
console.log([...obj])

for (let val of obj) {
  console.log(val)
}
