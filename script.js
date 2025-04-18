// Event Listeners
document.getElementById('clickBtn').addEventListener('click', function() {
    document.getElementById('clickOutput').textContent = 'Button clicked! Event listener works!';
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('userEmail').value;
    const messageElement = document.getElementById('formMessage');
    
    if (!email.includes('@') || !email.includes('.')) {
        messageElement.textContent = 'Please enter a valid email address';
        messageElement.className = 'error';
    } else {
        messageElement.textContent = 'Form submitted successfully!';
        messageElement.className = 'success';
        
        // Reset form after 2 seconds
        setTimeout(() => {
            this.reset();
            messageElement.textContent = '';
        }, 2000);
    }
});

// Interactive Element
document.getElementById('toggleBtn').addEventListener('click', function() {
    const secretMessage = document.getElementById('secretMessage');
    secretMessage.classList.toggle('hidden');
    
    // Change button text based on state
    this.textContent = secretMessage.classList.contains('hidden') 
        ? 'Toggle Secret Message' 
        : 'Hide Secret Message';
});