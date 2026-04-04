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

    let period = "AM";

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
let tdisplay =document.getElementById("timer-time");
let hdisplay =document.getElementById("timer-hours");
let mdisplay =document.getElementById("timer-minutes");
let sdisplay =document.getElementById("timer-seconds");

let startbtn =document.getElementById("timer-start");
let pausebtn =document.getElementById("timer-pause");
let resetbtn =document.getElementById("timer-reset");

let total =0;
let  t =null;

startbtn.onclick =function(){
    let h=parcelnt("hinput.value");
    let m=parcelnt("minput.value");
    let s=parcelnt("sinput.value")

    total= h*3600+m*60+s;

    if (t!=null )return;
    t=setInterval(function(){
    // if ()
     
}










//stopwatch
let stopwacthdisplay =document.getAnimations("stopwatch-time");
let stopwacthstart =document.getAnimations("stopwatch-start");
let stopwacthpause =document.getAnimations("stopwatch-pause");
let stopwacthreset =document.getAnimations("stopwatch-reset");
let stopwacthlap =document.getAnimations("stopwatch-lap");

let laplist =document.getElementById("lap-list")

let time = 0;
let stopwatch =null;
let lapcount =1;




 
