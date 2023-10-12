// Selecting DOM elements
const startBut = document.querySelector(".start")
const pauseBut = document.querySelector(".pause")
const refreshBut = document.querySelector(".refresh")
const display = document.querySelector(".time_display")
let p = document.querySelector("p")
let timer = null // Initialize timer variable to keep track of the setInterval
let timeSpeed = 1000 // Define the speed of the timer in milliseconds

let [seconds, minutes, hours] = [0, 0, 0] // Initialize time variables

// Disable pause and refresh buttons initially
pauseBut.setAttribute("disabled", true)
refreshBut.setAttribute("disabled", true)

// Event listeners for buttons
startBut.addEventListener("click", start)
pauseBut.addEventListener("click", pause)
refreshBut.addEventListener("click", refresh)

// Function to update the time display
function startWatch() {
    seconds++
    if (seconds === 60) {
        seconds = 0
        minutes++
        if (minutes === 60) {
            minutes = 0
            hours++
        }
    }
    let s = seconds < 10 ? `0${seconds}` : seconds
    let m = minutes < 10 ? `0${minutes}` : minutes
    let h = hours < 10 ? `0${hours}` : hours
    display.innerHTML = `${h}:${m}:${s}`
}

// Function to start the timer
function start() {
    if (startBut.innerHTML === "START") {
        startBut.innerHTML = "CONTINUE"
    }
    startBut.setAttribute("disabled", true)
    pauseBut.removeAttribute("disabled", true)
    refreshBut.removeAttribute("disabled", true)
    if (timer) {
        return false
    }
    timer = setInterval(startWatch, timeSpeed)
}

// Function to pause the timer
function pause() {
    startBut.removeAttribute("disabled", true)
    pauseBut.setAttribute("disabled", true)
    clearInterval(timer) // Stop the timer interval
    timer = null // Reset the timer variable
}

// Function to reset the timer
function refresh() {
    pauseBut.setAttribute("disabled", true)
    refreshBut.setAttribute("disabled", true)
    startBut.removeAttribute("disabled", true)
    startBut.innerHTML = "Continue" ? (startBut.innerHTML = "START") : false
    clearInterval(timer) // Stop the timer interval
    seconds = 0 // Reset seconds
    hours = 0 // Reset hours
    minutes = 0 // Reset minutes
    display.innerHTML = "00:00:00" // Reset the display
    timer = null // Reset the timer variable
}
