// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');
const timeDate = document.getElementById('clock-time');
let dayDate = document.getElementById("clock-date");
let amPm = document.getElementById("clock-period");
let format = document.getElementById("format-toggle");

//Timer

let timerDisplay = document.getElementById("timer-time");
let timerStart = document.getElementById("timer-start");
let timerPause = document.getElementById("timer-pause");
let timerReset = document.getElementById("timer-reset");

let h = document.getElementById("timer-hours");
let m = document.getElementById("timer-minutes");
let s = document.getElementById("timer-seconds");

// StopWatch

let display = document.getElementById("stopwatch-time");
let startBtn = document.getElementById("stopwatch-start");
let pauseBtn = document.getElementById("stopwatch-pause");
let resetBtn = document.getElementById("stopwatch-reset");
let lapBtn = document.getElementById("stopwatch-lap");
let li = document.getElementById("lap-list");

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

// Clock ke liya code

function upadteTime(){

    let hour = (new Date()).toString().slice(15,18);
    let nowTime = (new Date()).toString().slice(18,24);

    let nowDate = (new Date()).toString().slice(0,15);
    dayDate.innerText = nowDate;

    amPm.innerText = (hour >= 12 ? "PM" : "AM")
    
    format.checked?(amPm.innerText = null) : (hour = hour > 12 ? hour - 12 : hour);

    hour = (hour < 10 ? "0" + hour : hour);
   
    timeDate.innerText = hour + nowTime;
}

setInterval(upadteTime,1000);
upadteTime();
  
// Stopwtch ke liya code

let second = 0 , minute = 0 , hour = 0;
let timer2 = null;
let lapCount = 1;

function stopWatch(){
    second++;
    if (second == 60){
        second = 0; 
        minute++;
        if(minute == 60){
            minute = 0;
            hour++;
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    display.innerText = h + ":" + m + ":" + s ;
}

startBtn.addEventListener('click', function() {
    if (timer2 !== null){
        clearInterval(timer2);
    }
    timer2 = setInterval(stopWatch,1000);
})

pauseBtn.addEventListener('click', function(){
    clearInterval(timer2);
    timer2 = null;  
})

resetBtn.addEventListener('click', function(){
    clearInterval(timer2);
    timer2 = null;
    second = 0; minute = 0; hour = 0 ;
    display.innerText = "00:00:00" ;
    li.innerHTML = "";
});

lapBtn.addEventListener('click', function(){
    if (timer2 !== null){
        let h = hour < 10 ? "0" + hour : hour;
        let m = minute < 10 ? "0" + minute : minute;
        let s = second < 10 ? "0" + second : second; 

        let currentTime = h + ":" + m + ":" + s ;

        let newLap = document.createElement("li");
        newLap.innerText = "Lap " + lapCount + " - " + currentTime;

        li.prepend(newLap);

        lapCount++;
    }
})

//Timer code

let timer;
let total;

    // START Button
    timerStart.addEventListener('click', () => {
        clearInterval(timer); // Purana timer clear karein

            total = parseInt(h.value || 0) * 3600 + parseInt(m.value || 0) * 60 + parseInt(s.value || 0);
            if(total <= 0){ 
             alert("Timer set karo")
             return;
            };
            

            timer = setInterval(() => {
            total--;

            if (total < 0) {
            clearInterval(timer);
            timerDisplay.textContent = "00:00:00";
            return alert("Time is up!");
            }
            

            let hrs = Math.floor(total / 3600);
            let mins = Math.floor((total % 3600) / 60);
            let secs = total % 60;

            if (hrs < 10) hrs = "0" + hrs;
            if (mins < 10) mins = "0" + mins;
            if (secs < 10) secs = "0" + secs;
            
            
            timerDisplay.textContent = hrs + ":" + mins + ":" + secs;
            },1000);
            })

            timerPause.addEventListener('click', () => {
            clearInterval(timer);
            })

            timerReset.addEventListener('click', () =>{
            clearInterval(timer);
            timerDisplay.textContent = "00:00:00";
            h.value = 0 ; m.value = 0; s.value = 0;
            });