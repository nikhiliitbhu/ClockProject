# ClockProject
a web-app with clock, timer and stopwatch


// ================= TAB SWITCH =================
var tabs = document.getElementsByClassName("tab-button");
var panes = document.getElementsByClassName("tab-pane");

for (var i = 0; i < tabs.length; i++) {

    tabs[i].onclick = function () {

        // sab remove
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
            panes[j].classList.remove("active");
        }

        // current add
        this.classList.add("active");
        var id = this.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");
    };
}


// ================= CLOCK =================
var clockTime = document.getElementById("clock-time");
var clockDate = document.getElementById("clock-date");
var clockPeriod = document.getElementById("clock-period");
var formatToggle = document.getElementById("format-toggle");

setInterval(function () {

    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var period = "AM";

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
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var day = days[now.getDay()];
    var date = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();

    clockDate.innerText = day + ", " + date + " " + month + " " + year;

}, 1000);



// ================= TIMER =================
var tDisplay = document.getElementById("timer-time");

var hInput = document.getElementById("timer-hours");
var mInput = document.getElementById("timer-minutes");
var sInput = document.getElementById("timer-seconds");

var startBtn = document.getElementById("timer-start");
var pauseBtn = document.getElementById("timer-pause");
var resetBtn = document.getElementById("timer-reset");

var total = 0;
var t = null;

startBtn.onclick = function () {

    var h = parseInt(hInput.value) || 0;
    var m = parseInt(mInput.value) || 0;
    var s = parseInt(sInput.value) || 0;

    total = h * 3600 + m * 60 + s;

    if (t != null) return;

    t = setInterval(function () {

        if (total <= 0) {
            clearInterval(t);
            t = null;
            return;
        }

        total--;

        var hh = Math.floor(total / 3600);
        var mm = Math.floor((total % 3600) / 60);
        var ss = total % 60;

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



// ================= STOPWATCH =================
var swDisplay = document.getElementById("stopwatch-time");

var swStart = document.getElementById("stopwatch-start");
var swPause = document.getElementById("stopwatch-pause");
var swReset = document.getElementById("stopwatch-reset");
var swLap = document.getElementById("stopwatch-lap");

var lapList = document.getElementById("lap-list");

var time = 0;
var sw = null;
var lapCount = 1;

swStart.onclick = function () {

    if (sw != null) return;

    sw = setInterval(function () {

        time++;

        var hh = Math.floor(time / 3600);
        var mm = Math.floor((time % 3600) / 60);
        var ss = time % 60;

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

    var div = document.createElement("div");
    div.className = "lap-item";

    div.innerHTML = "<span class='lap-number'>Lap " + lapCount + "</span>" +
                    "<span class='lap-time'>" + swDisplay.innerText + "</span>";

    lapList.appendChild(div);
    lapCount++;
};