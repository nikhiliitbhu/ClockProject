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

// clock //
let clockTime = document.getElementById("clock-time");
let clockDate = document.getElementById("clock-date");
let clockPeriod = document.getElementById("clock-period");
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';  
    hours = hours % 12 || 12; // Convert to 12-hour format
    clockTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    clockDate.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    clockPeriod.textContent = period;
}
updateClock();
setInterval(updateClock, 1000);


// timer //

const timerStartBtn = document.getElementById("timer-start");
const timerPauseBtn = document.getElementById("timer-pause");
const timerResetBtn = document.getElementById("timer-reset");
const timerHoursInput = document.getElementById("timer-hours");
const timerMinutesInput = document.getElementById("timer-minutes");
const timerSecondsInput = document.getElementById("timer-seconds");
const timerDisplay = document.getElementById("timer-time");

let countdown;
let timerRemainingSeconds = 0;
let timerPaused = false;

function pad(value) {
    return value.toString().padStart(2, '0');
}

function updateTimerDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function validateTimerInput(id) {
    const input = document.getElementById(id);
    let value = parseInt(input.value, 10);
    if (Number.isNaN(value) || value < 0) value = 0;
    if (id === 'timer-hours') {
        value = Math.min(value, 23);
    } else {
        value = Math.min(value, 59);
    }
    input.value = value;
}

function startTimerInterval() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        if (timerRemainingSeconds <= 0) {
            clearInterval(countdown);
            timerPaused = false;
            timerPauseBtn.textContent = 'Pause';
            return;
        }
        timerRemainingSeconds -= 1;
        updateTimerDisplay(timerRemainingSeconds);
    }, 1000);
}

function timerstart() {
    if (countdown) {
        clearInterval(countdown);
    }

    timerRemainingSeconds =
        (parseInt(timerHoursInput.value, 10) || 0) * 3600 +
        (parseInt(timerMinutesInput.value, 10) || 0) * 60 +
        (parseInt(timerSecondsInput.value, 10) || 0);

    timerRemainingSeconds = Math.max(timerRemainingSeconds, 0);
    updateTimerDisplay(timerRemainingSeconds);

    if (timerRemainingSeconds === 0) {
        return;
    }

    timerPaused = false;
    timerPauseBtn.textContent = 'Pause';
    startTimerInterval();
}

function timerpause() {
    if (!countdown) {
        return;
    }

    if (!timerPaused) {
        clearInterval(countdown);
        timerPaused = true;
        timerPauseBtn.textContent = 'Resume';
    } else {
        timerPaused = false;
        timerPauseBtn.textContent = 'Pause';
        startTimerInterval();
    }
}

function timerreset() {
    clearInterval(countdown);
    countdown = null;
    timerPaused = false;
    timerPauseBtn.textContent = 'Pause';
    timerRemainingSeconds = 0;
    updateTimerDisplay(0);
    timerHoursInput.value = 0;
    timerMinutesInput.value = 0;
    timerSecondsInput.value = 0;
}

function updateTimer() {
    if (!countdown) {
        const remainingSeconds =
            (parseInt(timerHoursInput.value, 10) || 0) * 3600 +
            (parseInt(timerMinutesInput.value, 10) || 0) * 60 +
            (parseInt(timerSecondsInput.value, 10) || 0);
        updateTimerDisplay(remainingSeconds);
    }
}

// stopwatch //

const stopwatchDisplay = document.getElementById('stopwatch-time');
let stopwatchInterval;
let stopwatchElapsedSeconds = 0;
let stopwatchRunning = false;

function updateStopwatchDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    stopwatchDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function stopwatchstart() {
    if (stopwatchRunning) {
        return;
    }
    stopwatchRunning = true;
    stopwatchInterval = setInterval(() => {
        stopwatchElapsedSeconds += 1;
        updateStopwatchDisplay(stopwatchElapsedSeconds);
    }, 1000);
}

function stopwatchpause() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
}

function stopwatchreset() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchElapsedSeconds = 0;
    updateStopwatchDisplay(0);
    document.getElementById('lap-list').textContent = '';
}

function stopwatchlap() {
    if (!stopwatchRunning) {
        return;
    }
    const lapList = document.getElementById('lap-list');
    const lapItem = document.createElement('div');
    lapItem.textContent = `${pad(Math.floor(stopwatchElapsedSeconds / 3600))}:${pad(Math.floor((stopwatchElapsedSeconds % 3600) / 60))}:${pad(stopwatchElapsedSeconds % 60)}`;
    lapList.appendChild(lapItem);
}

function updateStopwatch() {
    updateStopwatchDisplay(stopwatchElapsedSeconds);
}
