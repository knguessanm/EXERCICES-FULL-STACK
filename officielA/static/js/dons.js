// scripts.js
// JavaScript for donation form

// Function to handle custom donation amount input
document.getElementById('donation-other').addEventListener('change', function() {
    document.getElementById('custom-amount').style.display = this.checked ? 'inline-block' : 'none';
});

// Function to handle donation submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Example: submit form data using fetch or XMLHttpRequest
    console.log('Form submitted!');
    // Replace with actual form submission handling
});
