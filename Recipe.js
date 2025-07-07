function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('modeIcon');

  body.classList.toggle('dark-mode');

  // Change icon
  if (body.classList.contains('dark-mode')) {
    icon.textContent = '🌙';
  } else {
    icon.textContent = '🌞';
  }
}

function startClock() {
  updateTime(); 
  setInterval(updateTime, 1000); 
}
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toDateString();
  document.getElementById('clock').textContent = `${dateString} - ${timeString}`;
}
