function toBoolean(something: any): boolean {
  return something as boolean
}

console.log(toBoolean(1)) // 返回值为 1
