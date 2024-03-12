var arrayNumber;
var diagonalDifference;
arrayNumber = [
    [3, 2, 1],
    [4, 5, 6],
    [9, 8, 7]
];
diagonalDifference = function (arr) {
    var d1;
    var d2;
    d1 = 0;
    d2 = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            // if(i == j){
            //     d1 += arr[i][j]
            // }
            // if(i + j == arr.length - 1){
            //     d2 += arr[i][j]
            // }
            i == j ? d1 += arr[i][j] : false;
            i + j == arr.length - 1 ? d2 += arr[i][j] : false;
        }
    }
    console.log(Math.abs(d1 - d2));
};
diagonalDifference(arrayNumber);
