// Get all tab buttons and tab panes
let tabButtons = document.querySelectorAll('.tab-button');
let tabPanes = document.querySelectorAll('.tab-pane');


// Add click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        let tabName = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// CLOCK JS

let clockTime = document.getElementById('clock-time');
let clockDate = document.getElementById('clock-date');
let period = document.getElementById('clock-period');
let timeformat = document.getElementById('format-toogle');
function storeTime(){
    let timeDate = ((new Date()).toString());
    let time = timeDate.slice(16,24);
    let date = timeDate.slice(0,15);
    let hour = timeDate.slice(16,18);
    
    if(!timeformat){
    if(hour>=12){ 
        period.innerText = "PM";
        if(hour>=13){hour = hour-12 }
        time = hour + time.slice(2);
         
    }else{
         period.innerText = "AM";
    }
}else{
    period.innerText = " ";
}

    clockTime.innerText = time;
    clockDate.innerText = date;

}
setInterval(storeTime,1000);


// // TIMER JS
// let timerDisplay = document.getElementById("timer-time");
// let timerHours = document.getElementById("timer-hours");
// let timerMinutes = document.getElementById("timer-minutes");
// let timerSeconds = document.getElementById("timer-seconds");

// let timerPauseBtn = document.getElementById("timer-pause");
// let timerResetBtn = document.getElementById("timer-reset");
// let timerStartBtn = document.getElementById("timer-start");

// let endTime, pausetime, id;

// function startTimer() {
//     let h = parseInt(timerHours.value) || 0;
//     let m = parseInt(timerMinutes.value) || 0;
//     let s = parseInt(timerSeconds.value) || 0;

//     endTime = Date.now() + (h*3600000 + m*60000 + s*1000);

//     updateTimer(); // instant update
//     id = setInterval(updateTimer, 200);

//     timerPauseBtn.disabled = false;
//     timerResetBtn.disabled = false;
//     timerStartBtn.disabled = true;
// }

// function updateTimer() {
//     let timeLeft = endTime - Date.now();

//     if (timeLeft <= 0) {
//         clearInterval(id);
//         resetTimer();
//         // new Audio('alarm.mp3').play();
//         // alert("Time's up!");
//         // return;
//     }

//     let h = Math.floor(timeLeft / 3600000);
//     let m = Math.floor((timeLeft % 3600000) / 60000);
//     let s = Math.floor((timeLeft % 60000) / 1000);

//     timerDisplay.innerText = format(h) + ":" + format(m) + ":" + format(s);
// }

// function pausetimer() {
//     if (timerPauseBtn.innerText === "PAUSE") {
//         pauseTime = Date.now();
//         clearInterval(id);
//         timerPauseBtn.innerText = "PLAY";
//     } else {
//         endTime += Date.now() - pauseTime;
//         id = setInterval(updateTimer, 200);
//         timerPauseBtn.innerText = "PAUSE";
//     }
// }

// function resetTimer() {
//     clearInterval(id);
//     timerDisplay.innerText = "00:00:00";

//     timerPauseBtn.disabled = true;
//     timerResetBtn.disabled = true;
//     timerStartBtn.disabled = false;
// }

// function format(num) {
//     return num < 10 ? "0" + num : num;
// }

//STOPWATCH

let display = document.getElementById('stopwatch-time');
let pauseBtn = document.getElementById('stopwatch-pause');
let startBtn = document.getElementById('stopwatch-start');
let resetBtn = document.getElementById('stopwatch-reset');
let lapBtn = document.getElementById('stopwatch-lap');
let lapList = document.getElementById('lap-list');

let start = null, id, pauseTime = 0;
let stopwatchRefreshRate = 500;
let lapData = [];

// START
function startStopwatch(){
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;

    start = Date.now();
    id = setInterval(updateStopwatch, stopwatchRefreshRate);
}

// UPDATE
function updateStopwatch(){
    let ms = Date.now() - start;

    let hrs = Math.floor(ms/3600000);
    ms %= 3600000;

    let mins = Math.floor(ms/60000);
    ms %= 60000;

    let secs = Math.floor(ms/1000);

    let time = format(hrs) + ":" + format(mins) + ":" + format(secs);
    display.innerText = time;
}

// FORMAT
function format(num){
    return num < 10 ? '0' + num : num;
}

// RESET
function resetStopwatch(){
    clearInterval(id);
    display.innerText = "00:00:00";
    lapList.innerHTML = "";
    lapData = [];

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    lapBtn.disabled = true;

    pauseBtn.innerText = "Pause";
    pauseBtn.style.backgroundColor = "";
}

// PAUSE / RESUME
function pauseStopwatch(){ if(pauseBtn.innerText === "PAUSE"){ clearInterval(id); pauseTime = Date.now(); pauseBtn.innerText = "PLAY"; pauseBtn.style.backgroundColor = "green"; } else { start += Date.now() - pauseTime; id = setInterval(updateStopwatch, stopwatchRefreshRate); pauseBtn.innerText = "PAUSE"; pauseBtn.style.backgroundColor = "#FFA500"; } }
    

// LAP
function lap(){
    lapData.push(display.innerText);

    let html = "<table><tr><th>#</th><th>Time</th></tr>";

    for(let i = lapData.length-1; i >= 0; i--){
        html += `<tr><td>${i+1}</td><td>${lapData[i]}</td></tr>`;
    }

    html += "</table>";
    lapList.innerHTML = html;
}

// EVENTS
startBtn.onclick = startStopwatch;
pauseBtn.onclick = pauseStopwatch;
resetBtn.onclick = resetStopwatch;
lapBtn.onclick = lap;