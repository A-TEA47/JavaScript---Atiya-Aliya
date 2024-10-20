function validateEmail() {
    // Get the email input value from the user
    let email = document.getElementById('email').value;
    
    // Regular expression for validating an email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email matches the pattern
    if (emailPattern.test(email)) {
        document.getElementById('result').innerText = "Valid email format.";
    } else {
        document.getElementById('result').innerText = "Invalid email format. Please enter a valid email.";
    }
}
