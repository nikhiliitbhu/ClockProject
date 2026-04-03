// Get all tab buttons and tab panes
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

const clockTime = document.getElementById('clock-time');
const clockPeriod = document.getElementById('clock-period');
const clockDate = document.getElementById('clock-date');
const toggleFormatButton = document.getElementById('format-toggle');
const formatLabel = document.getElementById('format-label');

let hour12 = true; // Flag to track 12-hour or 24-hour format



// Add click event listener to each tab button
tabButtons.forEach(button => {
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

function pad(n) {
    return String(n).padStart(2, '0'); // Single digit numbers ko 2 digits me convert karta hai, jaise 5 ko 05
}

const clock = () => {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let period = " ";

    if (hour12) {
        period = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12; // 12 ghante ke formate mai convert karta hai

    }

    clockTime.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    clockPeriod.textContent = period;
    clockPeriod.style.display = hour12 ? 'block' : 'none';

    let nowDate = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    clockDate.textContent = nowDate;
}


toggleFormatButton.addEventListener('click', () => {
    hour12 = !hour12;   
    toggleFormatButton.textContent = hour12 ? 'Switch to 24-Hour Format' : 'Switch to 12-Hour Format';
    formatLabel.textContent = hour12 ? '24-Hour Format' : '12-Hour Format';
});

setInterval(clock, 1000); // clock ko har second update karta hai