
let secondHand = document.querySelector(".second");

function setDate() {
    let now = new Date()
    let seconds = now.getSeconds()
    let secondDegree = ((seconds / 60) * 360) + 270;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    console.log(seconds)

}

setInterval(setDate, 1000);