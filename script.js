 // TAB SWITCH  
let  tabs = document.getElementsByClassName("tab-button");
let  panes = document.getElementsByClassName("tab-pane");

for (let  i = 0; i < tabs.length; i++) {

    tabs[i].onclick = function () {

        // sab remove
        for (let  j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
            panes[j].classList.remove("active");
        }

        // current add
        this.classList.add("active");
        let  id = this.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");
    };
}


// CLOCK  
let clockTime = document.getElementById("clock-time");
let  clockDate = document.getElementById("clock-date");
let  clockPeriod = document.getElementById("clock-period");
let  formatToggle = document.getElementById("format-toggle");

setInterval(function () {

    let  now = new Date();

    let  h = now.getHours();
    let  m = now.getMinutes();
    let  s = now.getSeconds();

    let  period = "AM";

    if (h >= 12) {
        period = "PM";
    }

    // 12 hour format
    if (!formatToggle.checked) {
        if (h > 12) {
            h = h - 12;
        }
        if (h == 0) {
            h = 12;
        }
    }

    // 0 add
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    clockTime.innerText = h + ":" + m + ":" + s;
    clockPeriod.innerText = formatToggle.checked ? "" : period;

    // date
    let  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let  year = now.getFullYear();

    clockDate.innerText = day + ", " + date + " " + month + " " + year;

}, 1000);



//  timer
