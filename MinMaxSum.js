var numbers;
var MinMaxSum;
numbers = [7, 69, 2, 221, 8974];
MinMaxSum = function (numbers) {
    numbers.sort();
    var numLeft;
    var numRight;
    numLeft = 0;
    numRight = 0;
    for (var i = 0; i < numbers.length - 1; i++) {
        numLeft += numbers[i];
        numRight += numbers[numbers.length - i - 1];
    }
    console.log('numLeft : ', numLeft);
    console.log('numRight : ', numRight);
};
MinMaxSum(numbers);
