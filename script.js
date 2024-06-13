const countElement = document.getElementById('count');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let count = 0;
let intervalId = null;

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Iniciar o relógio
setInterval(updateClock, 1000);

startButton.addEventListener('click', () => {
    intervalId = setInterval(() => {
        count++;
        countElement.textContent = count;
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId); // Para caso o contador esteja ativo
    count = 0;
    countElement.textContent = count;
});