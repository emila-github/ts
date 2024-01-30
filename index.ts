type FnType<T> = T extends {
  a: (args: infer U) => void
  b: (args: infer U) => void
}
  ? U
  : never

type T = FnType<{ a: (args: number) => void; b: (args: string) => void }> // type T = never
