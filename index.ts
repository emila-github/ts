type A = '小满' | '大满' | '超大满' | 'dd'

function isXiaoMan(value: A) {
  switch (value) {
    case '小满':
      break
    case '大满':
      break
    case '超大满':
      break
    case 'dd':
      break
    default:
      //是用于场景兜底逻辑
      const error: never = value
      return error
  }
}
