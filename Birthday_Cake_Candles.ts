
let candles:number[];
let birthdayCakeCandles:Function;

candles = [1000,1000,1000,1000,999,1000,1000,1000,1000,1000,1000,1000,1000,1000];
birthdayCakeCandles = (candles:number[]):void => {
    candles.sort(function(a, b){return a - b});
    let lastNumber:number = candles[candles.length - 1];
    let temp:number[] = [];

    temp = candles.filter(e => e === lastNumber);
    console.log(temp.length);
}

birthdayCakeCandles(candles);