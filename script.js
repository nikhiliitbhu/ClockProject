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


// TIMER JS
let t, sec = 0;

let d = document.getElementById("timer-time");

function startTimer() {
    if (t) return;

    if (!sec) {
        sec =
            (timer-hours.value * 3600) +
            (timer-minutes.value * 60) +
            (+timer-seconds.value);
    }

    t = setInterval(() => {
        if (sec <= 0) return clearInterval(t);

        sec--;

        let h = Math.floor(sec / 3600);
        let m = Math.floor(sec % 3600 / 60);
        let s = sec % 60;

        d.innerText =
            String(h).padStart(2, "0") + ":" +
            String(m).padStart(2, "0") + ":" +
            String(s).padStart(2, "0");

    }, 1000);
}

function pauseTimer() {
    clearInterval(t);
    t = null;
}

function resetTimer() {
    pauseTimer();
    sec = 0;
    d.innerText = "00:00:00";
}

