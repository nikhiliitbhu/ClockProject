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

//time and date code
setInterval(() => {
  let d = new Date(),
      h = d.getHours(),
      p = h >= 12 ? "PM" : "AM",
      f = document.getElementById("format-toggle").checked;

  if (!f) h = h % 12 || 12;

  document.getElementById("clock-time").innerText =
    `${String(h).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`;

  document.getElementById("clock-period").innerText = f ? "" : p;

  document.getElementById("clock-date").innerText =
    d.toLocaleDateString("en-US", { weekday:'long', month:'long', day:'numeric', year:'numeric' });

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
            let hours = String(Math.floor(stopwatchTime / 3600000)).padStart(2, '0');
            let minutes = String(Math.floor((stopwatchTime % 3600000) / 60000)).padStart(2, '0');
            let seconds = String(Math.floor((stopwatchTime % 60000) / 1000)).padStart(2, '0');
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
        let lapTime = document.getElementById('stopwatch-time').innerText;
        let lapList = document.getElementById('lap-list');
        let lapItem = document.createElement('div');
        lapItem.classList.add('lap-item');
        lapItem.innerText = `Lap ${lapList.children.length + 1}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
}

//timer code
let t;
let time = 0;
let running = false;

function start() {
    if (running) return;

    let h = +document.getElementById("timer-hours").value;
    let m = +document.getElementById("timer-minutes").value;
    let s = +document.getElementById("timer-seconds").value;

    time = h*3600 + m*60 + s;

    running = true;

    t = setInterval(run, 1000);
}

function run() {
    if (time <= 0) {
        clearInterval(t);
        running = false;
        alert("Time Up!");
        return;
    }

    time--;

    let hh = String(Math.floor(time/3600)).padStart(2,"0");
    let mm = String(Math.floor((time%3600)/60)).padStart(2,"0");
    let ss = String(time%60).padStart(2,"0");

    document.getElementById("timer-time").innerText = hh+":"+mm+":"+ss;
}

function pause() {
    if (running) {
        clearInterval(t);
        running = false;
    } else {
        running = true;
        t = setInterval(run, 1000);
    }
}

function reset() {
    clearInterval(t);
    running = false;
    time = 0;
    document.getElementById("timer-time").innerText = "00:00:00";
}