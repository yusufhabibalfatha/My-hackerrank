var numbers;
var plus_minus;
numbers = [1, 2, 3, 0, 0, 0, 0, 0, -1, -2, -3];
plus_minus = function (numbers) {
    var temp;
    temp = [
        numbers.filter(function (number) { return number > 0; }).length,
        numbers.filter(function (number) { return number < 0; }).length,
        numbers.filter(function (number) { return number == 0; }).length,
    ];
    temp.forEach(function (element) {
        console.log((element / numbers.length).toFixed(6));
    });
};
plus_minus(numbers);
