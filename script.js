
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
function updatetclock(){
    let now = new Date();
    
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        // AM' aur 'PM' kai liye
        let ampm;
        if (hours >= 12) {
            ampm = "PM";
            document.getElementById("clock-period").innerHTML = ampm;
        }else{
            ampm = "AM";
            document.getElementById("clock-period").innerHTML = ampm;
        }

        // time ko 0 kai sath dikhane kai liye
        if (hours < 10) {
            hours = "0" + hours;
        }else{
            hours = hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        } else {
            minutes = minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        } else {
            seconds = seconds;
        }
        // date ko 0 kai sath dikane kai liya
        let day = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }else{
            day = day;
        }

        if (month < 10) {
            month = "0" + month;
        }else{
            month = month;
        }
          // 24 hour → 12 hour convert
          let toggle = document.getElementById("format-toggle");
        
          if(!toggle.checked == true){
           hours = hours - 12;

          }else{
            hours = hours
          }
          

        // if (hours > 12) {
        //     hours = hours - 12;
        // } else if (hours === 0) {
        //     hours = 12;
        // }


        
        
            let time = hours + ":" + minutes + ":" + seconds;
            let date = day + " / " + month + " / " + year;
            setInterval(updatetclock,1000);
            document.getElementById("clock-time").innerText = time;
            document.getElementById("clock-date").innerText = date;
            
}
  




updatetclock();





