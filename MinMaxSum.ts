
let numbers:number[];
let MinMaxSum:Function;

numbers = [7,69,2,221,8974];

MinMaxSum = (numbers:number[]):void => {
    numbers.sort();
    let numLeft:number;
    let numRight:number;
    numLeft = 0;
    numRight = 0;

    for(let i:number = 0; i < numbers.length - 1; i++){
        numLeft += numbers[i]
        numRight += numbers[numbers.length - i - 1]
    }
    console.log('numLeft : ', numLeft)
    console.log('numRight : ', numRight)
}

MinMaxSum(numbers);