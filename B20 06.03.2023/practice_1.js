function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) { console.log('true') }
            else { console.log('false') }
        } else { console.log('true') }
    } else { console.log('false') }
}
isLeapYear(2005);
isLeapYear(2000);