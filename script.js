// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');
const timeDate = document.getElementById('clock-time');
let dayDate = document.getElementById("clock-date");
let ampm =document.getElementById("clock-period");

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
    let nowTime = (new Date()).toString().slice(15,24);
    timeDate.innerText = nowTime;

    let nowDate = (new Date()).toString().slice(0,15);
    dayDate.innerText = nowDate;
}
setInterval(upadteTime,1000);
upadteTime();
