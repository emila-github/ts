function Sub<T, K>(a: T, b: K): Array<T | K> {
  const params: Array<T | K> = [a, b]
  return params
}

Sub<Boolean, number>(false, 1)
