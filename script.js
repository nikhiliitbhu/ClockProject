

//TAB SWITCH
let tabs = document.getElementsByClassName("tab-button");
let panes = document.getElementsByClassName("tab-pane");

for (let i = 0; i < tabs.length; i++) {

    tabs[i].onclick = function () {

        // sab remove
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
            panes[j].classList.remove("active");
        }

        // current add
        this.classList.add("active");
        let id = this.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");
    };
}


//CLOCK 
let clockTime = document.getElementById("clock-time");
let clockDate = document.getElementById("clock-date");
let clockPeriod = document.getElementById("clock-period");
let formatToggle = document.getElementById("format-toggle");

setInterval(function () {

    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

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
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    clockDate.innerText = day + ", " + date + " " + month + " " + year;

}, 1000);



//  TIMER 
let tDisplay = document.getElementById("timer-time");

let hInput = document.getElementById("timer-hours");
let mInput = document.getElementById("timer-minutes");
let sInput = document.getElementById("timer-seconds");

let startBtn = document.getElementById("timer-start");
let pauseBtn = document.getElementById("timer-pause");
let resetBtn = document.getElementById("timer-reset");

let total = 0;
let t = null;

startBtn.onclick = function () {

    let h = parseInt(hInput.value) || 0;
    let m = parseInt(mInput.value) || 0;
    let s = parseInt(sInput.value) || 0;

    total = h * 3600 + m * 60 + s;

    if (t != null) return;

    t = setInterval(function () {

        if (total <= 0) {
            clearInterval(t);
            t = null;
            return;
        }

        total--;

        let hh = Math.floor(total / 3600);
        let mm = Math.floor((total % 3600) / 60);
        let ss = total % 60;

        if (hh < 10) hh = "0" + hh;
        if (mm < 10) mm = "0" + mm;
        if (ss < 10) ss = "0" + ss;

        tDisplay.innerText = hh + ":" + mm + ":" + ss;

    }, 1000);
};

pauseBtn.onclick = function () {
    clearInterval(t);
    t = null;
};

resetBtn.onclick = function () {
    clearInterval(t);
    t = null;

    total = 0;
    tDisplay.innerText = "00:00:00";

    hInput.value = 0;
    mInput.value = 0;
    sInput.value = 0;
};



//STOPWATCH 
let swDisplay = document.getElementById("stopwatch-time");

let swStart = document.getElementById("stopwatch-start");
let swPause = document.getElementById("stopwatch-pause");
let swReset = document.getElementById("stopwatch-reset");
let swLap = document.getElementById("stopwatch-lap");

let lapList = document.getElementById("lap-list");

let time = 0;
let sw = null;
let lapCount = 1;

swStart.onclick = function () {

    if (sw != null) return;

    sw = setInterval(function () {

        time++;

        let hh = Math.floor(time / 3600);
        let mm = Math.floor((time % 3600) / 60);
        let ss = time % 60;

        if (hh < 10) hh = "0" + hh;
        if (mm < 10) mm = "0" + mm;
        if (ss < 10) ss = "0" + ss;

        swDisplay.innerText = hh + ":" + mm + ":" + ss;

    }, 1000);
};

swPause.onclick = function () {
    clearInterval(sw);
    sw = null;
};

swReset.onclick = function () {
    clearInterval(sw);
    sw = null;

    time = 0;
    swDisplay.innerText = "00:00:00";
    lapList.innerHTML = "";
    lapCount = 1;
};

swLap.onclick = function () {

    let div = document.createElement("div");
    div.className = "lap-item";

    div.innerHTML = "<span class='lap-number'>Lap " + lapCount + "</span>" +
                    "<span class='lap-time'>" + swDisplay.innerText + "</span>";

    lapList.appendChild(div);
    lapCount++;
};