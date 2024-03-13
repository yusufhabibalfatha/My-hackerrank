var s = 7; // start home
var t = 11; // end home
var a = 5; // position apple tree
var b = 11; // position orange tree
var apples = [-2, 2, 1];
var oranges = [5, -6, -3];
var countApplesAndOranges;
countApplesAndOranges = function (s, t, a, b, apples, oranges) {
    var countApples;
    var countOranges;
    countApples = apples.filter(function (apple) { return (apple + a >= s) && (apple + a <= t); });
    countOranges = oranges.filter(function (orange) { return (orange + b >= s) && (orange + b <= t); });
    console.log('apple : ', countApples);
    console.log('orange : ', countOranges);
};
countApplesAndOranges(s, t, a, b, apples, oranges);
