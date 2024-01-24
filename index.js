function prop(obj, key) {
    return obj[key];
}
var o = { a: 1, b: 'b', c: false };
prop(o, 'a');
// prop(o, 'd') //此时就会报错发现找不到
