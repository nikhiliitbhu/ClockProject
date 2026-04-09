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

    time = hour + time.slice(2);
    clockPeriod.innerText="pm"
}
else if(hour<12){
    clockPeriod.innerText="am"
}
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

let stopwatch=document.getElementById('stopwatch');
let start=document.getElementById('stopwatch-start');
let stop=document.getElementById('stowatch-pause');
let delete=document.getElementById('stopwatch-reset');
