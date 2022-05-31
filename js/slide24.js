function leap() {
    var year;

    while(true) {
        year = prompt("Enter A Year");
        if (isNaN(year)){
            alert("You Did Not Enter A Year. Please Try Again");
            continue;
        } else {
            break;
        }
    }

    if(year % 4 != 0) {
        console.log("It Is A Common Year");
    } else if (year % 100 != 0) {
        console.log("It Is A Leap Year");
    } else if (year % 400 != 0) {
        console.log("It Is A Common Year");
    } else {
        console.log("It Is A Leap Year");
    }
   
}