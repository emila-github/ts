type Arr = ['a', 'b', 'c']

type First<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : []

type a = First<Arr> // type a = ["a", "b"]
