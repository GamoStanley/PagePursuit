// Select elements
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close-btn');
const formPopup = document.querySelector('.form-popup');
const blurBgOverlay = document.querySelector('.blur-bg-overlay');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const forgotPasswordLink = document.getElementById('forgot-password-link');

// Show the login/signup popup
loginBtn.addEventListener('click', function() {
    formPopup.style.display = 'block';
    blurBgOverlay.style.display = 'block';
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', function() {
    formPopup.style.display = 'none';
    blurBgOverlay.style.display = 'none';
});

// Switch to the signup form
signupLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('.form-box.login').style.display = 'none';
    document.querySelector('.form-box.signup').style.display = 'block';
});

// Switch to the login form
loginLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('.form-box.signup').style.display = 'none';
    document.querySelector('.form-box.login').style.display = 'block';
});

// Show the forgot password form
forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('.form-box.login').style.display = 'none';
    document.querySelector('.form-box.forgot').style.display = 'block';
});

// Handle login form submission and redirect
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Assuming login is successful, redirect to Aboutus.html
    window.location.href = 'page.html';
});
