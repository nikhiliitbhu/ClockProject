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

    let time = hour +":"+ minute+":"+ second;
    document.getElementById('clock-time').innerText= time;
    

}
setInterval(updateTime,1000);
updateTime();



function updateDate(){
 let now= (new Date()).toString().slice(0,15);
 document.getElementById("clock-date").innerText= now;
 
}
updateDate();

function updateclockperiod(){
    let now=(new Date()).toString().slice()
}