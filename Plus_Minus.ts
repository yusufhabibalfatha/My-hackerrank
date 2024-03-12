
let numbers: number[];
let plus_minus: Function;

numbers = [1,2,3,0,0,0,0,0,-1,-2,-3];

plus_minus = (numbers: number[]): void => {
    let temp: number[];

    temp = [
        numbers.filter(number => number > 0).length,
        numbers.filter(number => number < 0).length,
        numbers.filter(number => number == 0).length,
    ]
    temp.forEach(element => {
        console.log((element/numbers.length).toFixed(6))
    });
}

plus_minus(numbers);
