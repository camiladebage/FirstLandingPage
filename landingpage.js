document.addEventListener("DOMContentLoaded", function() {
    var inputEmail = document.getElementById("inputEmail");
    var inputPassword = document.getElementById("inputPassword");

    inputEmail.addEventListener("click", function() {
        inputEmail.removeAttribute("placeholder");
    });

    inputPassword.addEventListener("click", function() {
        inputPassword.removeAttribute("placeholder");
    });

    inputEmail.addEventListener("blur", function() {
        if (inputEmail.value === "") {
            inputEmail.setAttribute("placeholder", "Insira seu email...");
        }
    });

    inputPassword.addEventListener("blur", function() {
        if (inputPassword.value === "") {
            inputPassword.setAttribute("placeholder", "Insira sua senha...");
        }
    });
});