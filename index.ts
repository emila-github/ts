type Arr = [1, 2, 3, 4]

type ReveArr<T extends any[]> = T extends [infer First, ...infer rest]
  ? [...ReveArr<rest>, First]
  : T

type Res = ReveArr<Arr> // type Res = [4, 3, 2, 1]
