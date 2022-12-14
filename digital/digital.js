let secondArea = document.querySelector(".second")


function setDate() {
    let now = new Date()
    let seconds = now.getSeconds()
    if (seconds >= 0 && seconds < 10) {
        secondArea.textContent = '0' + seconds
    }
    else secondArea.textContent = seconds

}

setInterval(setDate, 1000)