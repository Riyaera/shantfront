// Validation.js
function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (values.email === "") {
        error.email = "Email should not be empty";
        alert("fill it")
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email format";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password should be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
