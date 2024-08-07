// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Example: Form Validation
    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    
    // Function to validate the password match
    function validatePasswords() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match.");
        } else {
            confirmPassword.setCustomValidity("");
        }
    }

    // Add event listener to check password match on input
    password.addEventListener('input', validatePasswords);
    confirmPassword.addEventListener('input', validatePasswords);
    
    // Example: Prevent form submission if validation fails
    form.addEventListener('submit', function(event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert("Please make sure the passwords match.");
        }
    });
});
