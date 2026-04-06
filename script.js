// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');
const timeDate = document.getElementById('clock-time');
let dayDate = document.getElementById("clock-date");
let amPm = document.getElementById("clock-period");
let format = document.getElementById("format-toggle");

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

function upadteTime(){

// Time ke liya code    
    let hour = (new Date()).toString().slice(15,18);
    let nowTime = (new Date()).toString().slice(18,24);

    let nowDate = (new Date()).toString().slice(0,15);
    dayDate.innerText = nowDate;

// AM , PM ke liya
    amPm.innerText = (hour >= 12 ? "PM" : "AM")
    
// 24 - hour format ka code
    format.checked?(amPm.innerText = null) : (hour = hour > 12 ? hour - 12 : hour);

// hour 10 se kam hai to usme "0" + karne ke liya
    hour = (hour < 10 ? "0" + hour : hour);
   
    timeDate.innerText = hour + nowTime;
}

setInterval(upadteTime,1000);
upadteTime();


