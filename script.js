// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('tab-button');
const tabPanes = document.querySelectorAll('tab-pane');
const clocktime =document.getElementById('clock-time');
const clockdate =document.getElementById('clock-date');


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


function updatetime(){
    let timedate=(new Date()).toString()
    clocktime.innerText=timedate.slice(16,24)
    clockdate.innerText=timedate.slice(0,15)
}
setInterval(updatetime,1000);
updatetime();