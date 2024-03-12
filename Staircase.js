var stars;
var staircase;
var line;
stars = 5;
staircase = function (stars) {
    for (var i = 1; i <= stars; i++) {
        line = '';
        for (var j = 1; j <= stars - i; j++) {
            line += ' ';
        }
        for (var k = 1; k <= i; k++) {
            line += '#';
        }
        console.log(line);
    }
};
staircase(stars);
