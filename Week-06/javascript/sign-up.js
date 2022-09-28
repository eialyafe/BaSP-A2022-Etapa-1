window.onload = function() {

    // FUNCTION DELARATION

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
            } else {
                return false;
            }
    }

    function lessThanXchars (x,string) {
        if (x > string.length) {
            return true;
            } else {
                return false;
            }
    }

    function Xchars (x,string) {
        if (x == string.length) {
            return true;
            } else {
                return false;
            }
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

    function stringHasSpace(string) {
        for (var i = 1; i < string.length; i++) {
            if (string[i] ==" ") {
                return true;
            }
        } return false;
    }

    // VAR DECLARATION
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
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

    // FIRST NAME

    var firstNameWarning = document.getElementById("first-name-warning");
    var pFirstNameWarning = document.createElement("p");
    firstNameWarning.appendChild(pFirstNameWarning);
    pFirstNameWarning.classList.add("p-red-color");

    firstName.onblur = function() {
        console.log(firstName.value);
        if (stringHasJustLetters(firstName.value) && moreThanXchars(3,firstName.value)) {
            firstName.classList.add("green-border");
        } else {
            firstName.classList.add("red-border");
            pFirstNameWarning.textContent ="Name must contain at least 4 letters and must be just letters"
        }
    }

    firstName.onfocus = function() {
        firstName.classList.remove("red-border");
        pFirstNameWarning.textContent = "";
    }

    // LAST NAME

    var lastNameWarning = document.getElementById("last-name-warning");
    var pLastNameWarning = document.createElement("p");
    lastNameWarning.appendChild(pLastNameWarning);
    pLastNameWarning.classList.add("p-red-color");

    lastName.onblur = function() {
            console.log(lastName.value);
            if (stringHasJustLetters(lastName.value) && moreThanXchars(3,lastName.value)) {
                lastName.classList.add("green-border");
            } else {
                lastName.classList.add("red-border");
                pLastNameWarning.textContent ="Last name must contain at least 4 letters and must be just letters"
            }
        }

    lastName.onfocus = function() {
            lastName.classList.remove("red-border");
            pLastNameWarning.textContent = "";
        }

    // DNI

    var dniWarning = document.getElementById("dni-warning");
    var pDniWarning = document.createElement("p");
    dniWarning.appendChild(pDniWarning);
    pDniWarning.classList.add("p-red-color");

    dni.onblur = function() {
        console.log(lastName.value);
        if (stringHasJustNumbers(dni.value) && moreThanXchars(7,dni.value)) {
            dni.classList.add("green-border");
        } else {
            dni.classList.add("red-border");
            pDniWarning.textContent ="DNI must contain at least 8 numbers, and just numbers"
        }
    }

    dni.onfocus = function() {
        dni.classList.remove("red-border");
        pDniWarning.textContent = "";
    }

    //TELEPHONE

    var telephoneWarning = document.getElementById("telephone-warning");
    var pTelephoneWarning = document.createElement("p");
    telephoneWarning.appendChild(pTelephoneWarning);
    pTelephoneWarning.classList.add("p-red-color");

    telephone.onblur = function() {
        if (stringHasJustNumbers(telephone.value) && Xchars(10,telephone.value)) {
            telephone.classList.add("green-border");
        } else {
            telephone.classList.add("red-border");
            pTelephoneWarning.textContent ="Telephone must contain  10 numbers, and just numbers"
        }
    }

    telephone.onfocus = function() {
        telephone.classList.remove("red-border");
        pTelephoneWarning.textContent = "";
    }

    //ADDRESS

    var addressWarning = document.getElementById("address-warning");
    var pAddressWarning = document.createElement("p");
    addressWarning.appendChild(pAddressWarning);
    pAddressWarning.classList.add("p-red-color");

    address.onblur = function() {
        if (validatePassword(address.value) && moreThanXchars(5,address.value) && stringHasSpace(address.value)) {
            address.classList.add("green-border");
        } else {
            address.classList.add("red-border");
            pAddressWarning.textContent ="Address must contain at least 5 characters (numbers and letters), and space between"
        }
    }

    address.onfocus = function() {
        address.classList.remove("red-border");
        pAddressWarning.textContent = "";
    }

    //CITY

    var cityWarning = document.getElementById("city-warning");
    var pCityWarning = document.createElement("p");
    cityWarning.appendChild(pCityWarning);
    pCityWarning.classList.add("p-red-color");

    city.onblur = function() {
        if (stringDoesntHaveSpecialCharacters(city.value) && moreThanXchars(3,city.value)) {
            city.classList.add("green-border");
        } else {
            city.classList.add("red-border");
            pCityWarning.textContent ="City must contain at least 4 characters (numbers and letters)"
        }
    }

    city.onfocus = function() {
        city.classList.remove("red-border");
        pCityWarning.textContent = "";
    }

    //POSTAL CODE

    var postalCodeWarning = document.getElementById("postal-code-warning");
    var pPostalCodeWarning = document.createElement("p");
    postalCodeWarning.appendChild(pPostalCodeWarning);
    pPostalCodeWarning.classList.add("p-red-color");

    postalCode.onblur = function() {
        if ((stringHasJustNumbers(postalCode.value)) && ((Xchars(4,postalCode.value) || Xchars(5,postalCode.value)))) {
            postalCode.classList.add("green-border");
        } else {
            postalCode.classList.add("red-border");
            pPostalCodeWarning.textContent ="Postal code must contain  4 or 5 characters (just numbers)"
        }
    }

    postalCode.onfocus = function() {
        postalCode.classList.remove("red-border");
        pPostalCodeWarning.textContent = "";
    }

    //POSTAL CODE

    var emailWarning = document.getElementById("email-warning");
    var pEmailWarning = document.createElement("p");
    emailWarning.appendChild(pEmailWarning);
    pEmailWarning.classList.add("p-red-color");

    email.onblur = function() {
        if (emailExpression.test(email.value)) {
            email.classList.add("green-border");
        } else {
            email.classList.add("red-border");
            pEmailWarning.textContent ="Email must contain just numbers, letters and @ "
        }
    }

    email.onfocus = function() {
        email.classList.remove("red-border");
        pEmailWarning.textContent = "";
    }

    //PASSWORD

    var passwordWarning = document.getElementById("password-warning");
    var pPasswordWarning = document.createElement("p");
    passwordWarning.appendChild(pPasswordWarning);
    pPasswordWarning.classList.add("p-red-color");

    password.onblur = function() {
        if ((validatePassword(password.value)) && (moreThanXchars(7,password.value))) {
            password.classList.add("green-border");
        } else {
            password.classList.add("red-border");
            pPasswordWarning.textContent ="Password must contain at least 8 characters (just numbers and letters) "
        }
    }

    password.onfocus = function() {
        password.classList.remove("red-border");
        pPasswordWarning.textContent = "";
    }

    //REPEAT PASSWORD

    var repeatPasswordWarning = document.getElementById("repeat-password-warning");
    var pRepeatPasswordWarning = document.createElement("p");
    repeatPasswordWarning.appendChild(pRepeatPasswordWarning);
    pRepeatPasswordWarning.classList.add("p-red-color");

    repeatPassword.onblur = function() {
        if ((validatePassword(password.value)) && (moreThanXchars(7,password.value)) && ((password.value) == (repeatPassword.value))) {
            repeatPassword.classList.add("green-border");
        } else {
            repeatPassword.classList.add("red-border");
            pRepeatPasswordWarning.textContent ="Password must contain at least 8 characters (just numbers and letters) and both passwords must be equals "
        }
    }

    repeatPassword.onfocus = function() {
        repeatPassword.classList.remove("red-border");
        pRepeatPasswordWarning.textContent = "";
    }


}
