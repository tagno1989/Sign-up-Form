const alerts = document.querySelector('.password-alert');
const password = document.querySelector("#password");
const confirms = document.querySelector("#confirm-password");

password.addEventListener("keyup", e => {
    if(password.value !== confirms.value){
        alerts.style.display = "inline-block"
    }
});

confirms.addEventListener("keyup", e => {
    if(password.value == confirms.value){
        alerts.style.display = "none"
        document.querySelector('input[type="password"]:focus').style.outlineColor = 'green'
    }
});