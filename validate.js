 function validatePasswords() {
    const password = document.querySelector('input[name="password"]').value;
    const rePassword = document.querySelector('input[name="re_password"]').value;
    const userId = document.querySelector('input[name="user_id"]').value;
    const errors = [];

    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-_=+\\\/<>.,`~]).{8,30}$/;

    if (!passwordCriteria.test(password)) {
        errors.push("Password must be 8-30 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.");
    }

    if (password === userId || password.includes(userId)) {
        errors.push("Password cannot be the same as the User ID or contain the User ID.");
    }

    if (password !== rePassword) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    
    return true;
}
