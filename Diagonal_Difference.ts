
let arrayNumber: number[][];
let diagonalDifference: Function;

arrayNumber = [
    [3,2,1],
    [4,5,6],
    [9,8,7]
]

diagonalDifference = (arr: number[][]): void => {
    let d1 : number;
    let d2 : number;

    d1 = 0
    d2 = 0

    for(let i: number = 0; i < arr.length; i++){
        for(let j: number = 0; j < arr.length; j++){
            // if(i == j){
            //     d1 += arr[i][j]
            // }
            
            // if(i + j == arr.length - 1){
            //     d2 += arr[i][j]
            // }

            i == j ? d1 += arr[i][j] : false
            i + j == arr.length - 1 ? d2 += arr[i][j] : false
        }
    }
    console.log(Math.abs(d1 - d2))
}

diagonalDifference(arrayNumber)