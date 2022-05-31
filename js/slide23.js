function smaller() {
    var a;
    var b;

    while(true) {
        a = prompt("Enter A Number: ");
        b = prompt("Enter Another Number: ");
        if (isNaN(a) || isNaN(b)) {
            alert("Try Again. Please Enter Two Numbers Next Time");
            continue;
        } else {
            break;
        }
    }

    if (a < b) {
        console.log(a + " is the lesser number");
    } else if (b < a) {
        console.log(b + " is the lesser number");
    } else {
        console.log("the numbers are equal")
    }
}

function smaller3() {
    var a;
    var b;
    var c;

    while(true) {
        a = prompt("Enter A Number: ");
        b = prompt("Enter Another Number: ");
        c = prompt("Enter The Final Number: ");

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert("Try Again. Please Enter Three Numbers Next Time");
            continue;
        } else {
            break;
        }
    } 

    if (a < b && a < c) {
        console.log(a + " is the lesser number");
    } else if (b < a &&  b < c) {
        console.log(b + " is the lesser number");
    } else if (c < a && c < b) {
        console.log(c + " is the lesser number");
    }
}