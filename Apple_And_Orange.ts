// Apple and Orange is count apple and orange that position is in distance of house
let s:number = 7;   // start home
let t:number = 11;   // end home
let a:number = 5;   // position apple tree
let b:number = 11;   // position orange tree
let apples:number[] = [-2, 2, 1];
let oranges:number[] = [5, -6];
let countApplesAndOranges:Function;

countApplesAndOranges = (s:number, t:number, a:number, b:number, apples:number[], oranges:number[]):void => {
    let countApples:number[];
    let countOranges:number[];

    countApples = apples.filter(apple => (apple + a >= s) && (apple + a <= t))
    countOranges = oranges.filter(orange => (orange + b >= s) && (orange + b <= t))

    console.log('apple : ', countApples)
    console.log('orange : ', countOranges)
}

countApplesAndOranges(s, t, a, b, apples, oranges);