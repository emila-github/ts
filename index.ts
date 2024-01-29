interface User {
  address?: string
  name?: string
  age?: number
}
//原理
type coustomOmit<T, K> = Pick<T, Exclude<keyof T, K>>

type test = Omit<User, 'age'>
type test2 = coustomOmit<User, 'age'>

//结果

// type test = {
//   address?: string | undefined;
//   name?: string | undefined;
// }
