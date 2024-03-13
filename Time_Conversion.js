var time;
var temp;
var timeConversion;
time = '01:05:45PM';
timeConversion = function (time) {
    var splitTime = time.split(":");
    console.log(splitTime);
    if (time.search("PM") >= 0) {
        if (splitTime[0] < '12') {
            splitTime[0] = (parseInt(splitTime[0]) + 12).toString();
        }
        splitTime[2] = splitTime[2].split('PM')[0];
    }
    if (time.search("AM") >= 0) {
        if (splitTime[0] == '12') {
            splitTime[0] = '00';
        }
        splitTime[2] = splitTime[2].split('AM')[0];
    }
    time = splitTime.join(':');
    return time;
};
console.log(timeConversion(time));
