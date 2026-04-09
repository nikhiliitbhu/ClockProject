// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');
const clocktime =document.getElementById('clock-time');
const clockdate =document.getElementById('clock-date');
const clockhour=document.getElementById('format-toggle');
const format = document.getElementById('clock-period')
// //  const clocktimer =document.getElementById('clock-timer');
 

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

function updatetime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = "";

    // Check if checkbox is checked
    if (clockhour.checked) {
        // 24-hour format
        period = "";
    } else {
        // 12-hour format
        period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
    }

    // Leading zeros
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display time
    clocktime.innerText = `${hours}:${minutes}:${seconds}`;
    format.innerText = period;

    // Display date
    clockdate.innerText = now.toDateString();
}
clockhour.addEventListener("change", updatetime);
setInterval(updatetime, 1000);



// stopwatch

