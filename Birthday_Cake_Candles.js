var candles;
var birthdayCakeCandles;
candles = [1000, 1000, 1000, 1000, 999, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
birthdayCakeCandles = function (candles) {
    console.log('candles before sort : ', candles);
    // candles.sort();
    candles.sort(function (a, b) { return a - b; });
    console.log('candles after sort : ', candles);
    var lastNumber = candles[candles.length - 1];
    var temp = [];
    temp = candles.filter(function (e) { return e === lastNumber; });
    console.log('temp : ', temp);
    console.log(temp.length);
};
birthdayCakeCandles(candles);
