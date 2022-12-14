
// grab each element in the dom
let secondSpan = document.querySelector(".second");
let minuteSpan = document.querySelector(".minute");
let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let hard = document.querySelector(".hard");
let stopBtn = document.querySelector(".stop");
let clearBtn = document.querySelector(".clear");
let resumeBtn = document.querySelector(".resume");

// to begin, we have both minutes and seconds
let seconds = 0
let minutes = 0
// use this variable to toggle on and off the interval
let interval = null

// decrease seconds to 0 and then restart at 59
function countDown() {
    // decrease seconds
    seconds--;
    // check to see if timer should go off
    checkAlarm();
    // after zero, restart to 59 and decrese minutes
    if (seconds < 0){
        seconds = 59;
        minutes--;
    }
    console.log(seconds)
    console.log(minutes)

}

// check to see if the timer is at zero and sound alarm
function checkAlarm() {
    // cheeck to see if timer is at zero
    if (seconds <= 0 && minutes <= 0) {
        // turn of count down
        stop();
        // ring alarm
        alert("The time has gone off!!!");
    }
}

// set the timer
function setTimer(minute, second) {
    // clear any existing timer
    stop();
    // set timer
    seconds = second;
    minutes = minute;
    // beggin the count down
    start();
}

// different versions of setTimer
function easyTimer() {
    setTimer(15, 0)
}
function medTimer() {
    setTimer(30, 0)
}
function hardTimer() {
    setTimer(45, 0)
}

// pause the timer 
function stop() {
    clearInterval(interval)
}
// reset the timer
function clear() {
    seconds = 0;
    minutes = 0;
}
// start the countdown
function start() {
    interval = setInterval(countDown, 1000)
}

// add functionality to button
easy.addEventListener('click', easyTimer)
medium.addEventListener('click', medTimer)
hard.addEventListener('click', hardTimer)
stopBtn.addEventListener('click', stop)
clearBtn.addEventListener('click', clear)
resumeBtn.addEventListener('click', start)