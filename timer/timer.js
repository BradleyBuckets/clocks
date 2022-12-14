
// grab each element in the dom
let secondSpan = document.querySelector(".second");
let minuteSpan = document.querySelector(".minute");
let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let hard = document.querySelector(".hard");

// to begin, we have both minutes and seconds
let seconds = 13
let minutes = 0

// decrease seconds to 0 and then restart at 59
function countDown() {
    // decrease seconds
    seconds--;
    // after zero, restart to 59 and decrese minutes
    if (seconds < 0){
        seconds = 59;
        minutes--;
    }
    console.log(seconds)
    console.log(minutes)
    // check to see if timer should go off
    checkAlarm();

}

// check to see if the timer is at zero and sound alarm
function checkAlarm() {
    // cheeck to see if timer is at zero
    if (seconds <= 0 && minutes <= 0) {
        alert("The time has gone off!!!")
    }
}

// setInterval(countDown, 1000)