const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getworkinghours(ramdomValue ) {
      switch (ramdomValue) {
        case IS_FULL_TIME:
           return FULL_TIME_HOURS;

        case IS_PART_TIME:
            return PART_TIME_HOURS
            
        default:
            return 0;
    }
}
    let workingHours=0;
    let ramdomValue = Math.floor(Math.random() * 10) % 3;
    workingHours=getworkinghours(ramdomValue);
    let empWage=workingHours*WAGE_PER_HOUR;
    console.log("Employee wage per day : "+ empWage);
    console.log("Employee working hrs : "+ workingHours);


