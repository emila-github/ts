interface User {
  name: string
  age: number
}
// 获取Promise的返回值
type Result = Promise<User>

type PromiseRes<T> = T extends Promise<infer R> ? R : never

type r = PromiseRes<Result> // type r = User

// 遇到了多层的情况可以使用递归
type Result2 = Promise<Promise<Promise<User>>>

type PromiseRes2<T> = T extends Promise<infer R> ? PromiseRes<R> : T

type r2 = PromiseRes2<Result2> // type r2 = Promise<User>
