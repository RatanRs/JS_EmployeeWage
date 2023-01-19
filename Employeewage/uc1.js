const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let workingHours=0;

    let ramdomValue = Math.floor(Math.random() * 10) % 3;
    switch (ramdomValue) {
        case IS_FULL_TIME:
            workingHours = FULL_TIME_HOURS;
            break;
        case IS_PART_TIME:
            workingHours = PART_TIME_HOURS
            break;
        default:
            workingHours = 0;
    }
let empWage=workingHours*WAGE_PER_HOUR;
console.log("Employee Wage:"+empWage);
