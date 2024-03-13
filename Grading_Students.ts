
let grades:number[];
let gradingStudents:Function;

grades = [79, 44, 77, 31, 41, 79];

gradingStudents = (grades:number[]):number[] => {
    grades.forEach((e, i, a) => {
        if(e > 40){
            if((e%5) !== 0){
                if(5 - (e%5) < 3){
                    a[i] = e + (5 - (e%5))
                }
            }
        }
    })
    return grades;
}

gradingStudents(grades);