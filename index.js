var queuedObserverList = new Set();
var observe = function (fn) {
    queuedObserverList.add(fn);
};
var observable = function (obj) {
    return new Proxy(obj, {
        set: function (target, key, value, receiver) {
            queuedObserverList.forEach(function (fun) { return fun(); });
            return Reflect.set(target, key, value, receiver);
        },
    });
};
var person = observable({ name: 'hello', age: 11 });
function print() {
    console.log("".concat(person.name, "--").concat(person.age));
}
observe(print);
person.name = 'hi';
person.name = 'hi2';
