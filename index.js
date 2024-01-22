var Enum;
(function (Enum) {
    Enum[Enum["fall"] = 0] = "fall";
})(Enum || (Enum = {}));
var a = Enum.fall;
console.log(a); //0
var nameOfA = Enum[a];
console.log(nameOfA); //fall
