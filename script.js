// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

// Get clock elements
const clocktime = document.getElementById('clock-time');
const clockdate = document.getElementById('clock-date');
const clockperiod = document.getElementById('clock-period');
const toggle= document.getElementById('formate-toggle');
const formatelabel = document.getElementById('formate-label');

let hours12 = true; // Default to 24-hour format


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
// clock time
function pad(n) {
    return String(n).padStart(2, '0');
    //iska kaam hai ki agar n 1 digit ka hai to uske aage 0 add kar dega 
    // yani use 05 ke form me convert kar dega
}
const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = '';
  clocktime.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  clockperiod.innerText = period;
  clockperiod.style.display = hours12 ? 'inline' : 'none';
  let nowDate = now.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  clockdate.innerText = nowDate;
// toggle.addEventListener('click', () => {
//     hour12 = !hour12;
//     toggleFormatButton.textContent = hour12 ? 'Switch to 24-Hour Format' : 'Switch to 12-Hour Format';
//     formatLabel.textContent = hour12 ? '24-Hour Format' : '12-Hour Format';
// });
}
updateClock();
setInterval(updateClock, 1000);
