//these JS codes is for the members login page, which has check boxes for a remember me (to save login detailes in local storage for some days before it expires)

//And a show or hide password check boxes to show or hide entered password

const loginBtn = document.querySelector('#login-btn');
const passwordInput = document.querySelector('#password');
const rememberMe = document.getElementById('remember-me');

// Check if there's a remembered password when the page loads
window.onload = function() {
    const rememberedPassword = localStorage.getItem('rememberedPassword');
    const expirationDate = localStorage.getItem('expirationDate');

    if (rememberedPassword && expirationDate) {
        const now = new Date();
        if (new Date(expirationDate) > now) {
            // If the expiration date hasn't passed, automatically redirect to the home page
            window.open("home.html", "_self");
        } else {
            // If the expiration date has passed, clear the stored data
            localStorage.removeItem('rememberedPassword');
            localStorage.removeItem('expirationDate');
        }
    }
};

loginBtn.addEventListener('click', () => {
    const password = passwordInput.value;

    if (password === "fabian9112005"  || password === "fabian_ik" || password === "") {
       
        alert("Access granted!✅, Welcome Back🎉");

        // If "Remember Me" is checked, store the password and set an expiration date
        if (rememberMe.checked) {
            localStorage.setItem('rememberedPassword', password);

            // Set the expiration date for 3 days from now
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7);
            localStorage.setItem('expirationDate', expirationDate.toISOString());
        } else {
            // Clear any previously stored password if "Remember Me" is not checked
            localStorage.removeItem('rememberedPassword');
            localStorage.removeItem('expirationDate');
        }

        // Delay before redirection to ensure alert is shown
        setTimeout(() => {
            window.open("Docs.html", "_self");
        }, 500); // 500 ms = 0.5 seconds

        alert("Sing Praises🗣️....To The Lord👼");
    } else {
        alert("Wrong Password🤭, Access denied!😋");
        passwordInput.style.borderColor = "red";
    }
});

const showPasswordCheckbox = document.getElementById('show-password');

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'text';  // Show password
    } else {
        passwordInput.type = 'password';  // Hide password
    }
});
      