const input = document.querySelector("#email");
const button = document.querySelector("#submitBtn");
const form = document.querySelector('form')
const error = document.querySelector('#error')
const alert = document.querySelector('#alert')

function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

button.addEventListener('click', function (event) {
    event.preventDefault();
    const email = input.value;
    
    if (!isEmailValid(email)) {
        alert.innerHTML = 'The email is invalid';
        input.style.outline = '1px solid hsl(0, 93%, 68%)'
        error.style.display = 'block'
    } else {
        alert.innerHTML = ""
        input.style.outline = '';
        form.submit()
    }
});

