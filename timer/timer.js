
// grab each element in the dom
let secondSpan = document.querySelector(".second");
let minuteSpan = document.querySelector(".minute");
let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let hard = document.querySelector(".hard");

// to begin, we have both minutes and seconds
let seconds = 13
let minutes = 4

// decrease seconds to 0 and then restart at 59
function countDown() {
    // decrease seconds
    seconds--;
    // after zero, restart to 59
    if (seconds < 0){
        seconds = 59
    }
    console.log(seconds)
}

// setInterval(countDown, 1000)