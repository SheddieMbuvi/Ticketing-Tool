document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Please fill out both fields.');
        return;
    }

    // Simulate a simple login check (replace with actual server-side validation)
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect or proceed to dashboard
        window.location.href = '/dashboard';
    } else {
        alert('Invalid username or password.');
    }
});