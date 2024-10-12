document.getElementById('showPassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const isPassword = passwordField.getAttribute('type') === 'password';

    // Toggle the type attribute
    passwordField.setAttribute('type', isPassword ? 'text' : 'password');

    // Change the button text
    this.textContent = isPassword ? 'Hide' : 'Show';
});
