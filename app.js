"use strict"

const toggleButton = document.getElementById('toggleButton');
const statusMessage = document.getElementById('statusMessage');

let isDarkMode = false;

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

toggleButton.addEventListener('click', () => {
   
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        document.body.style.backgroundColor = '#333'; 
        toggleButton.textContent = 'Turn on'; 
        statusMessage.textContent = `Last turn off: ${getCurrentTime()}`; 
    } else {
        document.body.style.backgroundColor = '#f0f0f0'; 
        toggleButton.textContent = 'Turn off'; 
        statusMessage.textContent = `Last turn on: ${getCurrentTime()}`; 
    }
});
