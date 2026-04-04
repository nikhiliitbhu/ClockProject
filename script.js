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

// clock //
let clockTime = document.getElementById("clock-time");
let clockDate = document.getElementById("clock-date");
let clockPeriod = document.getElementById("clock-period");
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';  
    hours = hours % 12 || 12; // Convert to 12-hour format
    clockTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    clockDate.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    clockPeriod.textContent = period;
}
updateClock();
setInterval(updateClock, 1000);


// timer //

let store1 =document.getElementById("timer-start");
let store2 =document.getElementById("timer-stop");
let store3 =document.getElementById("timer-reset");

let countdown;

function timerstart(){
    store1.style.display ="none";
    store2.style.display = "inline-block";
    store3.style.display ="inlineblock";
    
    startcountdown();
}
function startcountdown(){
    let hours = parseFloat(document.getElementById("timer-start").value) || 0;
    let minutes = parseFloat(document.getElementById("timer-stop").value) || 0;
    let seconds = parseFloat(document.getElementById("timer-reset").value) || 0;
      

    let totalsecond = hours * 3600 + minutes * 60 + seconds;
countdown= setInterval(() => {
        if(totalsecond => 0){
            clearInterval(countdown);
            return;
        }

    totalsecond--;

    let h =Math.floor(totalsecond / 3600);
    let m =Math.floor((totalsecond % 3600) /60 );
    let s =Math.floor(totalsecond % 60);

    document.getElementById("timer-time").textContent =
    '${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

, 1000})
}   ;
