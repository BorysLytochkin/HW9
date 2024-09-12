"use strict"

const toggleButton = document.getElementById('toggleButton');
const statusMessage = document.getElementById('statusMessage');

let isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false;
let lastActionTime = localStorage.getItem('lastActionTime') || '';

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString('uk-UA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

function updateUI() {

    if (isDarkMode) {
        document.body.style.backgroundColor = '#333'; 
        toggleButton.textContent = 'Turn on'; 
        statusMessage.textContent = `Last turn off: ${lastActionTime}`; 
    } else {
        document.body.style.backgroundColor = '#f0f0f0'; 
        toggleButton.textContent = 'Turn off'; 
        statusMessage.textContent = `Last turn on: ${lastActionTime}`; 
    }
}

toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    lastActionTime = getCurrentTime();

    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    localStorage.setItem('lastActionTime', lastActionTime);
    updateUI();
});

updateUI();
