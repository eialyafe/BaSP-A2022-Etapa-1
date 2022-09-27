window.onload = function() {
    // pruebas
    var x = "holacomoestas"
    var y = 12546
    console.log(stringHasJustLetters("holacomoestas"));
    console.log(stringHasJustLetters(x));
    console.log(stringHasJustLetters(y));
    console.log(stringHasJustNumbers(x));
    console.log(stringHasJustNumbers(y));

    console.log(stringHasJustLetters("1234"));





    // pruebas

    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var dni = document.getElementById("dni");
    var birthdayDate = document.getElementById("birthday-date");
    var telephone = document.getElementById("telephone");
    var address = document.getElementById("address");
    var telephone = document.getElementById("telephone");
    var city = document.getElementById("city");
    var postalCode = document.getElementById("postal-code");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("repeat-password");

    var firstNameWarning = document.getElementById("first-name-warning");
    var pFirstNameWarning = document.createElement("p");
    pFirstNameWarning.classList.add("p-red-color");
    // firstNameWarning.appendChild(pFirstNameWarning);


    firstName.onblur = function() {
        console.log(firstName.value);
        if (emailExpression.test(email.value)) {
            email.classList.add("green-border");
        } else {
            email.classList.add("red-border");
            pEmail.textContent ="Email must contain just numbers and letters"
        }
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

    function stringDoesntHaveSpecialCharacters(string) {
        for (var i = 0; i < string.length; i++) {
            if (stringHasLetter(string [i]) || stringHasLetter(string [i])) {
            return true;
            }
        } return false;
    }

    function validatePassword(string) {
        if (stringHasNumber(string) &&
            stringHasLetter(string) &&
            stringDoesntHaveSpecialCharacters(string)) {
            return true;
            console.log("password Correcta");
        } else {
            console.log("password incorrecta");
        }
    }

    function moreThanXchars (x,string) {
        if (x < string.length) {
            return true;
            }
    } return false;

    function lessThanXchars (x,string) {
        if (x > string.length) {
            return true;
            }
    } return false;

    function stringHasJustLetters(string) {
        for (var i = 0; i < string.length; i++) {
            if (string[i].toUpperCase() == string[i].toLowerCase()) {
                return false;
            }
        } return true;
    }

    function stringHasJustNumbers(string) {
        for (var i = 0; i <= string.length; i++) {
            if (string[i] <="0" || string[i] >="9") {
                return false;
            }
        } return true;
    }

    function stringHasSpace(string) {
        for (var i = 1; i < string.length; i++) {
            if (string[i] =" ") {
                return true;
            }
        } return false;
    }

}
