var grades;
var gradingStudents;
grades = [79, 44, 77, 31, 41, 79];
gradingStudents = function (grades) {
    console.log('before foreach ', grades);
    grades.forEach(function (e, i, a) {
        if (e > 40) {
            if ((e % 5) !== 0) {
                if (5 - (e % 5) < 3) {
                    a[i] = e + (5 - (e % 5));
                }
            }
        }
    });
    console.log(grades);
    return grades;
};
gradingStudents(grades);
