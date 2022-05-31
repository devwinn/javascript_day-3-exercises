function isNumber(test) {
    if(isNaN(test)) {
        return false;
    } else {
        return true;
    }
}

function convertToNumber(test) {
    if (isNumber(test)) {
        return parseInt(test)
    } else {
        console.log("You didn't enter a number")
    }
}