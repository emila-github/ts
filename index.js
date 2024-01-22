function isXiaoMan(value) {
    switch (value) {
        case '小满':
            break;
        case '大满':
            break;
        case '超大满':
            break;
        case 'dd':
            break;
        default:
            //是用于场景兜底逻辑
            var error = value;
            return error;
    }
}
