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

