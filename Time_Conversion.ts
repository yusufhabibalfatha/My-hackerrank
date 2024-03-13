// Convert time 12 to 24 hours
let time:string;
let timeConversion:Function;

time = '01:05:45PM';

timeConversion = (time:string):string => {
    let splitTime:string[] = time.split(":");

    if(time.search("PM") >= 0){
        if(splitTime[0] < '12'){
            splitTime[0] = (parseInt(splitTime[0]) + 12).toString();
        }
        splitTime[2] = splitTime[2].split('PM')[0]
    }

    if(time.search("AM") >= 0){
        if(splitTime[0] == '12'){
            splitTime[0] = '00'
        }
        splitTime[2] = splitTime[2].split('AM')[0]
    }

    time = splitTime.join(':')
    return time;
}

console.log(timeConversion(time))
