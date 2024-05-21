// script.js
document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.querySelector('.bubbles');
    const bubblesCount = 20;

    for (let i = 0; i < bubblesCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.width = `${Math.random() * 60 + 20}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = `${Math.random() * 20 + 20}s`;
        bubble.style.animationDelay = `${Math.random() * 20}s`;
        bubblesContainer.appendChild(bubble);
    }
});
