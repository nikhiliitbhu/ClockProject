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



function updateTime(){
    let now = new Date();
    let hour=now.getHours();
    let minute=now.getMinutes();
    let second=now.getSeconds();

    let clockPeriod = document.getElementById('clock-period');
    let format = document.getElementById('format-toggle');
    let time = hour +":"+ minute+":"+ second;

    if(format.checked){
        clockPeriod.innerText= null
    } else {
        if(hour>=12){
    if(hour>=13){
        hour = hour-12;
    }
}
    time = hour + time.slice(2);
    clockPeriod.innerText="pm"
} HEAD


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

    timerPauseBtn.disabled = false; v
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

else if(hour<12){
    clockPeriod.innerText="am"
}
a527742814af3aafbe9cc6145fa027aa055e7be0
    }
    document.getElementById('clock-time').innerText= time;
}
setInterval(updateTime,1000);
updateTime();


function updateDate(){
 let now= (new Date()).toString().slice(0,15);
 document.getElementById("clock-date").innerText= now;
 
}
updateDate();




// stopwatch

let display=document.getElementById('stopwatch-time');
let startbtn=document.getElementById('stopwatch-start');
let stopbtn=document.getElementById('stowatch-pause');
let deletebtn=document.getElementById('stopwatch-reset');
let lapbtn=document.getElementById('stopwatch-lape');

let second=0, minute=0, hour=0;
let timer = null;

function stopwatch(){

    second++;
    if(second==60){
        second=0;
        minute++;
        if(minute==60){
            minute=0;
            hour++;
        }
    }

    let h =hour<10? "0"+hour : hour;
    let m = minute<10? "0"+hour : hour;
    let s = second<10? "0"+hour : hour;

    display.innerText = h + ":" + m + ":" + s;

}

startbtn.addEventListener('click', () => {
     if(timer!==null){
        clearInterval(timer);
    
     }
     setInterval(stopwatch,1000);
})