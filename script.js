 // TAB SWITCH  
const  tabs = document.getElementsByClassName("tab-button");
const  panes = document.getElementsByClassName("tab-pane");

const clocktime = document.getElementById('clock-time');
const clockdate = document.getElementById('clock-date');

 

// Add event listener to each tab button
tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {

        const tabName = this.getAttribute('data-tab');

        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

function updateClock() {
    let timeDate =(new Date()).toString();
    clocktime.innerText = timeDate.slice(16, 24);
    clockdate.innerText = timeDate.slice(0, 15);
}

setInterval(updateClock,1000);
updatetime();


 

 

 