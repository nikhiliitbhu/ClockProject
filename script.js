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
let time = 0;
let interval;

function start(){
    let hours = document.getElementById("timer-hours").value;
    let minutes = document.getElementById("timer-miniutes").value;
    let seconds = document.getElementById("timer-seconds").value;
    if(time === 0){
        time = (hours * 3600 + minutes * 60 + seconds) * 1000;
    }
    interval = setInterval (() => {
        time -= 1000;
         let total = time / 1000;
        let hours = Math.floor(total / 3600);
        let minutes = Math.floor((total % 3600) / 60);
        let seconds = Math.floor(total % 60);

        //format
          document.getElementById("timer-time").innerText =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

            if (time <= 0) {
            clearInterval(interval);
            alert("Time Up!");
        }
    }, 1000);
}

function pause() {
    clearInterval(interval);
}

