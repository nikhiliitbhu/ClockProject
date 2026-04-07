// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');


// Add click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});


//STOPWATCH

let display = document.getElementById('stopwatch-time');
let pauseBtn = document.getElementById('stopwatch-pause');
let startBtn = document.getElementById('stopwatch-start');
let resetBtn = document.getElementById('stopwatch-reset');
let lapBtn = document.getElementById('stopwatch-lap');
let lapList = document.getElementById('lap-list');

let start = null, id, stopwatchRefreshRate = 500;
let lapData = [];

function startStopwatch(){
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;

    start = Date.now();
    id = setInterval(updateStopwatch, stopwatchRefreshRate);
}

function updateStopwatch(){
    let ms = Date.now() - start;
    currentStopwatchTime = formatTwoDigits(Math.floor(ms/3600000));
    ms -= Math.floor(ms/3600000)*3600000;
    currentStopwatchTime += ":" + formatTwoDigits(Math.floor(ms/60000)) + ":";
    ms -= Math.floor(ms/60000)*60000;
    currentStopwatchTime += formatTwoDigits(Math.floor(ms/1000));

    display.innerText = currentStopwatchTime;
}

function formatTwoDigits(num) {
  return num < 10 ? '0' + num : num;
}

function resetStopwatch(){
    clearInterval(id);
    display.innerText = "00:00:00";
    lapList.innerHTML = null;
    lapData = [];
    pauseBtn.innerText = "PAUSE";
    pauseBtn.style.backgroundColor = "#FFA500";

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    lapBtn.disabled = true;
}

function pauseStopwatch(){

    if(pauseBtn.innerText === "PAUSE"){
        clearInterval(id);
        pauseTime = Date.now();
        pauseBtn.innerText = "PLAY";
        pauseBtn.style.backgroundColor = "green";

    } else {
        start += Date.now() - pauseTime;
        id = setInterval(updateStopwatch, stopwatchRefreshRate);
        pauseBtn.innerText = "PAUSE";
        pauseBtn.style.backgroundColor = "#FFA500";

    }
}

function lap(){
    lapData.push(display.innerText);
    let lapTable = "<table>  <tr> <th> Index </th> <th> Record </th> </tr>  ";

    for(let i = lapData.length-1; i >= 0 ; i--){ 
        lapTable += `<tr> <td> ${i+1} </td> <td> ${lapData[i]} </td></tr>`;
    }

    lapTable += " </table>";

    lapList.innerHTML = lapTable;
}


//TIMER FUNCATIONALITY

let timerDisplay = document.getElementById("timer-time");
let timerHours = document.getElementById("timer-hours");
let timerMinutes = document.getElementById("timer-minutes");
let timerSeconds = document.getElementById("timer-seconds");

let timerPauseBtn = document.getElementById("timer-pause");
let timerResetBtn = document.getElementById("timer-reset");
let timerStartBtn = document.getElementById("timer-start");

let endTime, pauseTime;

function startTimer(){
    endTime = Date.now() + (parseInt(timerHours.value)*3600000 + parseInt(timerMinutes.value)*60000 + parseInt(timerSeconds.value)*1000);
    id = setInterval(updateTimer, 200);

    timerPauseBtn.disabled = false;
    timerResetBtn.disabled = false;
    timerStartBtn.disabled = true;

}

function updateTimer(){
    let timeLeft = endTime - Date.now();
    if(timeLeft <= 0){
        clearInterval(id);
        resetTimer();
        new Audio('alarm.mp3').play();
        alert("Time's up!");

        return;
    }
    let hours = Math.floor(timeLeft / 3600000);
    let minutes = Math.floor((timeLeft % 3600000) / 60000);
    let seconds = Math.floor((timeLeft % 60000) / 1000);
    timerDisplay.innerText = formatTwoDigits(hours) + ":" + formatTwoDigits(minutes) + ":" + formatTwoDigits(seconds);
}

function pauseTimer(){
    if(timerPauseBtn.innerText === "PAUSE"){
        pauseTime = Date.now();
        clearInterval(id);
        timerPauseBtn.innerText = "PLAY";
        timerPauseBtn.style.backgroundColor = "green";
    } else {
        endTime += Date.now() - pauseTime;
        id = setInterval(updateTimer, 500);
        timerPauseBtn.innerText = "PAUSE";
        timerPauseBtn.style.backgroundColor = "#FFA500";
    }   
}

function resetTimer(){
    clearInterval(id);
    timerDisplay.innerText = "00:00:00";

    timerPauseBtn.disabled = true;
    timerResetBtn.disabled = true;
    timerStartBtn.disabled = false;
}


//CLOCK FUNCTIONALITY

let clockTime = document.getElementById('clock-time');
let clockDate = document.getElementById('clock-date');
let clockPeriod = document.getElementById('clock-period');
let formatToggle = document.getElementById('format-toggle');

let is24Hour = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    clockDate.innerText = now.toLocaleDateString('en-US', options);
    
    if (is24Hour) {
        // 24-hour format
        clockTime.innerText = formatTwoDigits(hours) + ":" + formatTwoDigits(minutes) + ":" + formatTwoDigits(seconds);
        clockPeriod.style.display = 'none';
    } else {
        // 12-hour format
        let period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert 0 to 12 for 12 AM
        clockTime.innerText = formatTwoDigits(hours) + ":" + formatTwoDigits(minutes) + ":" + formatTwoDigits(seconds);
        clockPeriod.innerText = period;
        clockPeriod.style.display = 'block';
    }
}

function toggleFormat() {
    is24Hour = formatToggle.checked;
    updateClock();
}

// Start the clock and update every second
updateClock();
setInterval(updateClock, 1000);

// Add event listener to the checkbox
formatToggle.addEventListener('change', toggleFormat);
