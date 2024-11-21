document.querySelector('.drop').addEventListener('click', function () {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown.style.display === 'none' || !dropdown.style.display) {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });
  
  // Optional: Close dropdown when clicking outside
  document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    const button = document.querySelector('.drop');
    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
  