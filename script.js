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
let clockTime = document.getElementById('clock-time');
let clockDate = document.getElementById('clock-date');
let period = document.getElementById('clock-period');
let timeformat = document.getElementById('timeformat');
function storeTime(){
    let timeDate = ((new Date()).toString());
    let time = timeDate.slice(16,24);
    let date = timeDate.slice(0,15);
    let hour = timeDate.slice(16,17);
    (hour>12) ? "PM" : "AM";
    clockTime.innerText = time;
    clockDate.innerText = date;

}
setInterval(storeTime,1000);


