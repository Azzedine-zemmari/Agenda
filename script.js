// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dayFrames = document.querySelectorAll('.day-frame.real');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupTime = document.getElementById('popup-time');
    const popupDescription = document.getElementById('popup-description');
    const closeBtn = document.querySelector('.close-btn');

    dayFrames.forEach(dayFrame => {
        dayFrame.addEventListener('click', () => {
            const title = dayFrame.getAttribute('data-title');
            const time = dayFrame.getAttribute('data-time');
            const description = dayFrame.getAttribute('data-description');

            const date = new Date(time);
            const month = date.toLocaleString('default', { month: 'long' });

            popupTitle.textContent = title;
            popupTime.textContent = month;
            popupDescription.textContent = description;

            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
