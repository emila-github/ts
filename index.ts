// 实现一个 FirstEle 获取第一个索引位置的元素：
type FirstEle<T extends unknown[]> = T extends [infer F, ...unknown[]]
  ? F
  : never

type Result = FirstEle<[1, 2, 3]> // 1

type Result2 = FirstEle<[true, 1, 'darui']> // true

// 实现一个 LastEle 获取最后一个索引位置的元素：
type LastEle<T extends unknown[]> = T extends [...unknown[], infer L]
  ? L
  : never

type Result3 = LastEle<[1, 2, 3]> // 3

type Result4 = LastEle<[true, 1, 'darui']> // 'darui'
// 实现一个去头去尾 MiddleEles
type MiddleEles<T extends unknown[]> = T extends [infer F, ...infer M, infer L]
  ? M
  : never

type Result5 = MiddleEles<[1, 2, 3, 4, 5]> // [2, 3, 4]
type Result6 = MiddleEles<[true, 1, 2, 3, 'darui']> // [1, 2, 3]
