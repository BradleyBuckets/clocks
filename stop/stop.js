
let secondSpan = document.querySelector(".second");
let startBtn = document.querySelector(".start");

let keepGoing = false
let seconds = 0
function addSecond() {
    seconds++;
    if (seconds >= 0 && seconds < 10){
        secondSpan.textContent = '0' + seconds;
    }
    else secondSpan.textContent = seconds;
}

let interval = null

function start() {
    clearInterval(interval)
    interval = setInterval(addSecond, 1000)
}
startBtn.addEventListener("click", start)
