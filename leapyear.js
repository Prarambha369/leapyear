function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4 but not by 100,
    // or if it is divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function displayLeapYears(startYear, endYear) {
    let leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
    }
    console.log("Leap years between " + startYear + " and " + endYear + ": " + leapYears.join(", "));
}

// Call the function to display leap years between 2000 and 3000
displayLeapYears(2000, 3000);