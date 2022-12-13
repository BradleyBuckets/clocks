
let secondHand = document.querySelector(".second");
let minuteHand = document.querySelector(".minute");

function setDate() {
    // Create a new date
    let now = new Date()
    // store the seconds
    let seconds = now.getSeconds()
    let secondDegree = ((seconds / 60) * 360) + 270;
    // store the minutes
    let minutes = now.getMinutes()
    let minuteDegree = ((minutes / 60) * 360) + 270;
    // change hand
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
}

setInterval(setDate, 1000);