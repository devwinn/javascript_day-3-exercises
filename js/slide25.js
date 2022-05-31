function month() {
    var yearAndMonth;
    while(true) {
        input = prompt("Please enter a Year and Month separated by a space. ex. 2022 3");
        yearAndMonth= input.split(" ");

        if(isNaN(yearAndMonth[0]) || isNaN(yearAndMonth[1])){
            alert("Something went wrong. Please try again.")
            continue;
        } else {
            break;
        }

    }
}