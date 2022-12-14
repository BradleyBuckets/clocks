
let milSpan = document.querySelector(".mil");
let secondSpan = document.querySelector(".second");
let minuteSpan = document.querySelector(".minute");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

let interval = null
let mil = 0;
let seconds = 0;
let minutes = 0;

function addMilSecond() {
    mil++;
    if (mil > 99) {
        mil = 0;
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }
    }
    setScreen(mil, seconds, minutes)
}

function setScreen(mil, seconds, minutes) {
    setMilSpan(mil)
    setSecondSpan(seconds)
    setMinuteSpan(minutes)
}

function setMilSpan(mil) {
    if (mil >= 0 && mil < 10){
        milSpan.textContent = '0' + mil;
    }
    else milSpan.textContent = mil;
}
function setSecondSpan(seconds) {
    if (seconds >= 0 && seconds < 10){
        secondSpan.textContent = '0' + seconds;
    }
    else secondSpan.textContent = seconds;
}
function setMinuteSpan(minutes) {
    if (minutes >= 0 && minutes < 10){
        minuteSpan.textContent = '0' + minutes;
    }
    else minuteSpan.textContent = minutes;
}


function start() {
    stop();
    interval = setInterval(addMilSecond, 10);
}

function stop() {
    clearInterval(interval)
}

function reset() {
    stop();
    mil = 0;
    seconds = 0;
    minutes = 0;
    setScreen(mil, seconds, minutes)
}

startBtn.addEventListener("click", start)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)
