
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
    // show changes on the screen
    setTextContent()
}

// update and change the screen
function setTextContent(){
    // add extra 0 to single digit numbers
    if (seconds < 10) {
        secondSpan.textContent = '0' + seconds;
    }
    else secondSpan.textContent = seconds

    if (minutes < 10) {
        minuteSpan.textContent = '0' + minutes;
    }
    else minuteSpan.textContent = minutes
}

// check to see if the timer is at zero and sound alarm
function checkAlarm() {
    // cheeck to see if timer is at zero
    if (seconds <= 0 && minutes <= 0) {
        // ring alarm
        alert("The time has gone off!!!");
        // turn of count down
        clear();

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
    setTextContent()
}
function medTimer() {
    setTimer(30, 0)
    setTextContent()
}
function hardTimer() {
    setTimer(45, 0)
    setTextContent()
}

// pause the timer 
function stop() {
    clearInterval(interval)
}
// reset the timer
function clear() {
    stop()
    seconds = 0;
    minutes = 0;
    setTextContent()
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