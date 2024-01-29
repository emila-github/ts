const fn = () => [1, 2, 3, 'sad']

type num = ReturnType<typeof fn>

// 原理
type CustomFn<F extends Function> = F extends (...args: any[]) => infer Res
  ? Res
  : never
