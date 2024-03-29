//UC 1 if else condition
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT) {
        console.log("UC1 Employee is Absent");
    }
    else {
        console.log("UC1 Employee is Present");
    }
}

//UC 2 Switch case
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;

        case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    
        default:
        empHrs = 0;    
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC2 Emp Wage: " + empWage)
}

//UC 3 Function
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;


    function getWorkHrs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;  
        default:
            return 0;    
        }
    }
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkHrs(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC3 Hour: " +empHrs+ " Emp Wage: " + empWage)
}

//UC 4 
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;

    function getWorkHrs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;

        default:
            return 0;
        }
    }

    let totalEmpHrs = 0;
    for(let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkHrs(empCheck);
    }

    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC4 Hour: " +totalEmpHrs+ " Emp Wage: " + empWage)
}

//UC 5 while loop
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HOURS_IN_MONTH = 100;

    function getWorkHrs(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
                break;

            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                break;

            default:
                return 0;
        }
    }

    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while(totalWorkingDays < NUM_OF_WORKING_DAYS && totalEmpHrs <= MAX_HOURS_IN_MONTH) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkHrs(empCheck);
    }

    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC5 Total Days: "+totalWorkingDays + " Total Hrs: "+ totalEmpHrs +" Emp Wage: " + empWage);
}
