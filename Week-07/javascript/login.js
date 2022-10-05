window.onload = function() {

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var emailDiv = document.getElementById("email-div");

    var pEmail = document.createElement("p");
    pEmail.classList.add("p-red-color");
    emailDiv.appendChild(pEmail);

    email.onblur = function() {
        console.log(email.value);
        if (emailExpression.test(email.value)) {
            email.classList.add("green-border");
        } else {
            email.classList.add("red-border");
            pEmail.textContent ="Email must contain just numbers and letters"
        }
    }

    email.onfocus = function() {
        email.classList.remove("red-border");
        pEmail.textContent = "";
    }

    var passwordDiv = document.getElementById("password-div");
    var pPassword = document.createElement("p");
    passwordDiv.appendChild(pPassword);
    pPassword.classList.add("p-red-color");

    password.onblur = function () {
        if (validatePassword(password.value)) {
            password.classList.add("green-border");
        } else {
            password.classList.add("red-border");
            pPassword.textContent ="Password must contain at least a number, a letter and none special characters"
        }
    }

    password.onfocus = function() {
        password.classList.remove("red-border");
        pPassword.textContent = "";
    }

    function stringHasNumber(string) {
        for (var i = 0; i <= string.length; i++) {
            if (string[i] >= "0" && string[i] <= "9") {
                return true;
            }
        } return false;
    }

    function stringHasLetter(string) {
        for (var i = 0; i < string.length; i++) {
            if (string [i].toUpperCase() != string [i].toLowerCase()) {
                return true;
            }
        } return false;
    }

    function stringHasJustLetters(string) {
        for (var i = 0; i < string.length; i++) {
            if (string[i].toUpperCase() == string[i].toLowerCase()) {
                return false;
            }
        } return true;
    }

    function stringHasJustNumbers(string) {
        for (var i = 0; i <= string.length; i++) {
            if (string[i] <"0" || string[i] >"9") {
                return false;
            }
        } return true;
    }

    function stringDoesntHaveSpecialCharacters(string) {
        for (var i = 0; i < string.length; i++) {
            if (!((stringHasJustLetters(string [i])) || (stringHasJustNumbers(string [i])))) {
            return false;
            }
        } return true;
    }

    function validatePassword(string) {
        if (stringHasNumber(string) &&
            stringHasLetter(string) &&
            stringDoesntHaveSpecialCharacters(string)) {
            return true;
        }
    }

    var continueButton = document.getElementById("continue-btn");
    continueButton.onclick =function(e) {
        e.preventDefault();
        if (validatePassword(password.value) && emailExpression.test(email.value) ) {
            continueButton.classList.remove("disable-btn");
            var url =  "https://basp-m2022-api-rest-server.herokuapp.com/login?email="+email.value+"&password="+password.value;
            var promise = fetch(url);
            promise
                .then(function(response){
                        return response.json();
                })
                .then(function(data) {
                    console.log (data);
                    if (data.success == true) {
                        alert("Successfully login:\n" + data.msg);
                    } else {
                        alert("Login failed:\n" +data.msg);
                    }
                })
                .catch (function(error){
                    alert ('error: ' + '\n' + error);
                })
        } else continueButton.classList.add("disable-btn");
    }
}