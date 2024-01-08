// ts 可以定义this 的类型， 在js中无法使用 必须在第一个参数定义this 的类型
var obj = {
    user: [1, 2, 3],
    add: function (num) {
        this.user.push(num);
    },
    sub: function (num) {
        var findIndex = this.user.findIndex(function (item) { return item === num; });
        console.log('findIndex', findIndex);
        if (findIndex != -1) {
            this.user.splice(findIndex, 1);
        }
    },
    otherFn: function (str) {
        console.log(str);
        return str;
    },
};
obj.add(4);
obj.otherFn('ttt');
console.log(obj);
obj.sub(2);
console.log(obj);
