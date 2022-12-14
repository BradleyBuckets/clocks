let secondArea = document.querySelector(".second")
let minuteArea = document.querySelector(".minute")
let hourArea = document.querySelector(".hour")


function setDate() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours() % 12;
    if (seconds >= 0 && seconds < 10) {
        secondArea.textContent = '0' + seconds
    }
    else secondArea.textContent = seconds;
    if (minutes >= 0 && minutes < 10) {
        minuteArea.textContent = '0' + minutes
    }
    else minuteArea.textContent = minutes;
    if (hours >= 0 && hours < 10) {
        hourArea.textContent = '0' + hours
    }
    else hourArea.textContent = hours;

}

setInterval(setDate, 1000)