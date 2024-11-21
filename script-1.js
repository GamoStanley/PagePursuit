// Select elements
const loginBtn = document.querySelector('.Form');
const closeBtn = document.querySelector('.close-btns');
const formPopup = document.querySelector('.form-popup');
const blurBgOverlay = document.querySelector('.blur-bg-overlay');


// Show the Genre form popup
loginBtn.addEventListener('click', function() {
    formPopup.style.display = 'block';
    blurBgOverlay.style.display = 'block';
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', function() {
    formPopup.style.display = 'none';
    blurBgOverlay.style.display = 'none';
});