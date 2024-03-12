
let stars: number;
let staircase: Function;
let line: string;

stars = 5;

staircase = (stars: number): void => {
    for(let i: number = 1; i <= stars; i++){
        line = ''
        for(let j:number = 1; j <= stars - i; j++){
            line += ' '
        }
        for(let k:number = 1; k <= i; k++){
            line += '#'
        }
        console.log(line)
    }
}

staircase(stars);
