// = CLOCK 
let clocktime = document.getElementById("clock-time");
let clockdate = document.getElementById("clock-date");
let period= document.getElementById("clock-period");
let timeformat= document.getElementById("format-toggle");

function updateClock() {
    let now = new Date();

    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    clocktime.innerText = time;
    clockdate.innerText = now.toDateString();
}

setInterval(updateClock, 1000);

    if (h >= 12) {
        period = "PM";
    }
    else(period ="AM");
        
    

    // 12 hour format
    if (!formatToggle.checked) {
        if (h > 12) {
            h = h - 12;
        }
        if (h == 0) {
            h = 12;
        }
    }

// STOPWATCH 
let swDisplay = document.getElementById("stopwatch");

let swTime = 0;
let swInterval;

function start() {
    swInterval = setInterval(function () {
        swTime = swTime + 1;
        let.innerText = swTime;
    }, 1000);
}

function pause() {
    clearInterval(swInterval);
}

function reset() {
    clearInterval(swInterval);
    swTime = 0;
    swDisplay.innerText = 0;
}


//  TIMER 
let timerDisplay = document.getElementById("timer");

let timerTime = 10;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {

        timerTime = timerTime - 1;
        timerDisplay.innerText = timerTime;

        if (timerTime == 0) {
            clearInterval(timerInterval);
            alert("Time Up");
        }

    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerTime = 10;
    timerDisplay.innerText = 10;
}