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


//STOPWATCH

let display = document.getElementById('stopwatch-time');
let pauseBtn = document.getElementById('stopwatch-pause');
let startBtn = document.getElementById('stopwatch-start');
let resetBtn = document.getElementById('stopwatch-reset');
let lapBtn = document.getElementById('stopwatch-lap');
let lapList = document.getElementById('lap-list');

let start = null, id;
let lapData = [];

function startStopwatch(){
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;

    start = Date.now();
    id = setInterval(updateStopwatch, 1000);
}

function updateStopwatch(){
    let ms = Date.now() - start;
    let currentStopwatchTime = Math.floor(ms/3600000);
    ms -= currentStopwatchTime*3600000;
    currentStopwatchTime += ":" + Math.floor(ms/60000) + ":";
    ms -= Math.floor(ms/60000)*60000;
    currentStopwatchTime += Math.floor(ms/1000);

    display.innerText = currentStopwatchTime;
}

function resetStopwatch(){
    clearInterval(id);
    display.innerText = "00:00:00";
    lapList.innerHTML = null;

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
    lapBtn.disabled = true;
}

function pauseStopwatch(){

    if(pauseBtn.innerText === "PAUSE"){
        clearInterval(id);
        pauseTime = Date.now();
        pauseBtn.innerText = "PLAY";
        pauseBtn.style.backgroundColor = "green";

    } else {
        start += Date.now() - pauseTime;
        id = setInterval(updateStopwatch, 1000);
        pauseBtn.innerText = "PAUSE";
        pauseBtn.style.backgroundColor = "#FFA500";

    }
}

function lap(){
    lapData.push(display.innerText);
    let lapTable = "<table>  <tr> <th> Index </th> <th> Record </th> </tr>  ";

    for(let i = lapData.length-1; i >= 0 ; i--){ 
        lapTable += `<tr> <td> ${i+1} </td> <td> ${lapData[i]} </td></tr>`;
    }

    lapTable += " </table>";

    lapList.innerHTML = lapTable;
}
