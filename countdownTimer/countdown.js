let intervalId;
let targetTime = 0;
let isRunning = false;

function updateTimer() {
  const currentTime = Date.now();
  const remainingTime = Math.max(targetTime - currentTime, 0);

  const hours = Math.floor(remainingTime / 3600000);
  const minutes = Math.floor((remainingTime % 3600000) / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer').textContent = formattedTime;

  if (remainingTime === 0) {
    stopTimer();
  }
}

function startTimer() {
  if (!isRunning) {
    const hoursInput = parseInt(document.getElementById('hours').value) || 0;
    const minutesInput = parseInt(document.getElementById('minutes').value) || 0;
    const secondsInput = parseInt(document.getElementById('seconds').value) || 0;
    targetTime = Date.now() + (hoursInput * 3600000) + (minutesInput * 60000) + (secondsInput * 1000);

    intervalId = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

function resetTimer() {
  stopTimer();
  targetTime = 0;
  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
  updateTimer();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
