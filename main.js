// FInd the time seassion

let date = new Date();
let hours = date.getHours();
    if (hours <= 3) {
        console.log("This is Mid Night")
    }   else if(hours < 12) {
        console.log("This is Morning");
    }   else if (hours < 15) {
        console.log("This is Afternoon");
    }   else if (hours < 18) {
        console.log("This is Evening");
    }   else if (hours <= 23) {
        console.log("This is Night");
    }   else if (hours > 23) {
        console.log("Error Time")
    }