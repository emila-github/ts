var proxy = function (object, key) {
    return new Proxy(object, {
        get: function (target, prop, receiver) {
            console.log('get');
            return Reflect.get(target, prop, receiver);
        },
        set: function (target, prop, value, receiver) {
            console.log('set');
            return Reflect.set(target, prop, value, receiver);
        },
    });
};
// const logAccess = (object: Person, key: 'name' | 'age' | 'sex') => {
//     return proxy(object, key)
// }
var logAccess = function (object, key) {
    return proxy(object, key);
};
var woman = logAccess({
    name: 'orange',
    sex: 0,
    age: 18,
}, 'age');
woman.age = 16;
console.log(woman);
