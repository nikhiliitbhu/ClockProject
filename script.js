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
setInterval(()=> {
    const now = new Date();
    document.getElementById('clock-time').innerText = now.toLocaleTimeString();
    document.getElementById('clock-date').innerText = now.toLocaleDateString();
}, 1000);

//stop watch code

let stopwatchInterval;
let stopwatchTime = 0;
let isRunning = false; 
function start() {
    if (!isRunning) {
        isRunning = true;
        stopwatchInterval = setInterval(() => {
            stopwatchTime += 1000;
            const hours = String(Math.floor(stopwatchTime / 3600000)).padStart(2, '0');
            const minutes = String(Math.floor((stopwatchTime % 3600000) / 60000)).padStart(2, '0');
            const seconds = String(Math.floor((stopwatchTime % 60000) / 1000)).padStart(2, '0');
            document.getElementById('stopwatch-time').innerText = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
}
function pause() {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        isRunning = false;
    }
}

function reset() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    isRunning = false;
    document.getElementById('stopwatch-time').innerText = '00:00:00';
    document.getElementById('lap-list').innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = document.getElementById('stopwatch-time').innerText;
        const lapList = document.getElementById('lap-list');
        const lapItem = document.createElement('div');
        lapItem.classList.add('lap-item');
        lapItem.innerText = `Lap ${lapList.children.length + 1}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}