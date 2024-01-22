var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
var obj = (_a = {
        max: 5,
        current: 0
    },
    _a[Symbol.iterator] = function () {
        return {
            max: this.max,
            current: this.current,
            next: function () {
                if (this.current == this.max) {
                    return {
                        value: undefined,
                        done: true,
                    };
                }
                else {
                    return {
                        value: this.current++,
                        done: false,
                    };
                }
            },
        };
    },
    _a);
console.log(__spreadArray([], obj, true));
for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
    var val = obj_1[_i];
    console.log(val);
}
