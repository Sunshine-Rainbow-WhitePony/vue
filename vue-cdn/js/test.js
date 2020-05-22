var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
