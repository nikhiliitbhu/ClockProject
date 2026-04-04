// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

const clockTime = document.getElementById('clock-time');
const clockPeriod = document.getElementById('clock-period');
const clockDate = document.getElementById('clock-date');
const toggleFormatButton = document.getElementById('format-toggle');
const formatLabel = document.getElementById('format-label');

// Stopwatch
const stopwatchTime = document.getElementById('stopwatch-time');
const stopwatchStart = document.getElementById('stopwatch-start');
const stopwatchPause = document.getElementById('stopwatch-pause');
const stopwatchReset = document.getElementById('stopwatch-reset');

//Timer
const timerTime = document.getElementById('timer-time');
const timerStart = document.getElementById('timer-start');
const timerPause = document.getElementById('timer-pause');
const timerReset = document.getElementById('timer-reset');

const timerMinInput = document.getElementById('timer-minutes');
const timerSecInput = document.getElementById('timer-seconds'); 
const timerHoursInput = document.getElementById('timer-hours');



let hour12 = true; // Flag to track 12-hour or 24-hour format



// Add click event listener to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', function () {
        const tabName = this.getAttribute('data-tab');

        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

function pad(n) {
    return String(n).padStart(2, '0'); // Single digit numbers ko 2 digits me convert karta hai, jaise 5 ko 05
}

const clock = () => {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let period = " ";

    if (hour12) {
        period = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12; // 12 ghante ke formate mai convert karta hai

    }

    clockTime.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    clockPeriod.textContent = period;
    clockPeriod.style.display = hour12 ? 'block' : 'none';

    let nowDate = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    clockDate.textContent = nowDate;
}


toggleFormatButton.addEventListener('click', () => {
    hour12 = !hour12;
    toggleFormatButton.textContent = hour12 ? 'Switch to 24-Hour Format' : 'Switch to 12-Hour Format';
    formatLabel.textContent = hour12 ? '24-Hour Format' : '12-Hour Format';
});

setInterval(clock, 1000); // clock ko har second update karta hai

// Stopwatch functionality

let mSec = "0";
let sec = "0";
let min = "0";
let stopwatchId = null;

stopwatchStart.addEventListener('click', function() {
    if (stopwatchId !== null){
        clearInterval(stopwatchId); // Agar stopwatch already chal raha hai to usko stop kar deta hai
    }
    stopwatchId = setInterval(stopwatch, 10); // Stopwatch ko 10 milliseconds ke interval par update karta hai
});

stopwatchPause.addEventListener('click', function() {
    clearInterval(stopwatchId); // Stopwatch ko pause karta hai
     if (stopwatchId !== null){
        stopwatchId = null; // Agar stopwatch already chal raha hai to 
        (stopwatchPause.textContent == "play") ? (stopwatchPause.textContent = "pause") : (stopwatchPause.textContent = "play"); // Pause button ka text change karta hai
    }else { 
        
    stopwatchId = setInterval(stopwatch, 10);
    ; // Pause button ka text change karta ha,i
    }
});

stopwatchReset.addEventListener('click', function() {
    clearInterval(stopwatchId); 
    stopwatchTime.textContent = "00:00:00"; // Stopwatch time ko reset karta hai
    mSec = "00";
    sec = "00";
    min = "00";
    stopwatchId = null;
});

function stopwatch() {
    mSec++;
    if (mSec == 100) {
        mSec = "00";
        sec++;
        if (sec == 60) {
            sec = "00";
            min++;
        }
    }

    let mSecString = mSec < 10 ? `0${mSec}` : mSec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    stopwatchTime.textContent = `${minString}:${secString}:${mSecString}`; // Stopwatch time ko display karta hai

}

// Timer functionality

let timerId = null;     
let timerMin = 0;
let timerSec = 0;


function getInputMs() {
  const h = parseInt(timerHoursInput.value)   || 0;
  const m = parseInt(timerMinInput.value) || 0;
  const s = parseInt(timerSecInput.value) || 0;
  return (h * 3600 + m * 60 + s) * 1000;
}

function updateTimerDisplay() {
    const h = Math.floor(timerSec / 3600);
    const m = Math.floor((timerSec % 3600) / 60);
    const s = timerSec % 60;
    const hString = h < 10 ? `0${h}` : h;
    const mString = m < 10 ? `0${m}` : m;
    const sString = s < 10 ? `0${s}` : s;
    timerTime.textContent = `${hString}:${mString}:${sString}`;
}

function timer(){
    if (timerSec > 0) {
        timerSec--;
        updateTimerDisplay();
    } else {
        clearInterval(timerId);
        timerId = null;
        alert("Time's up!"); // Timer khatam hone par alert dikhata hai
    }
}