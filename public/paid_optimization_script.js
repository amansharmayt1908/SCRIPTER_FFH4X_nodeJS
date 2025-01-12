document.addEventListener('DOMContentLoaded', () => {
    // Get all glass cards
    const basicCard = document.getElementById('b');
    const advanceCard = document.getElementById('ad'); 
    const supremeCard = document.getElementById('s');

    // Add click handlers
    basicCard.addEventListener('click', () => {
        window.location.href = '/BasicOptimization';
    });

    advanceCard.addEventListener('click', () => {
        window.location.href = '/AdvanceOptimization';
    });

    supremeCard.addEventListener('click', () => {
        window.location.href = '/SupremeOptimization';
    });
});

// Dark mode toggle functionality
const colorButton = document.querySelector('.color-button');
const body = document.body;
let isDarkMode = false;

colorButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.style.backgroundColor = 'black';
        colorButton.textContent = 'Light Mode';
    } else {
        body.style.backgroundColor = 'white';
        colorButton.textContent = 'Dark Mode';
    }
});

