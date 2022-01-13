const form = document.getElementById('myFormId');

//  Get the input fields
// var password = document.querySelector(".password");
// var phone = document.querySelector('.phone');
// var name = document.querySelector('.name');

// // Get the error elements
// var errorPassword = document.getElementById("errorPassword");
// var errorName = document.getElementById('errorName');
// var errorPhone = document.getElementById('errorPhone');

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    //define variable of errors
    var acumErrores = 0;

    form.classList.remove('is-invalid');



    var inputEmail = document.getElementById('inputEmail');

    var inputFirstName = document.forms["myForm"]["inputFirstName"];
    var inputLastName = document.forms["myForm"]["inputLastName"];
    var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputAddress = document.forms["myForm"]["inputAddress"];
    var inputPhone = document.forms["myForm"]["inputPhone"];


    //--VALIDATION EMAIL--//
    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Please, you have fill up this field!";
        acumErrores++;

    } else if (!validar_email(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "The entered e-mail is not valid!";
        acumErrores++;

    }


    //--VALIDATION PASSWORD--//
    if (inputPassword.value == "" || inputPassword.length < 8) {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Please, You have to fill up this field!";
        acumErrores++;

    } else {
        (validate_password(inputPassword.value))
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "You have to insert at least a Uppercase character, minimum 8 characters, at least one number! ";
        acumErrores++;
    }


    //--VALIDATION FIRSTNAME--//
    if (inputFirstName.value == "" || inputFirstName.length != 2) {
        inputFirstName.classList.add("is-invalid");
        document.getElementById("errorFirstName").textContent = "You have to introduce your Firstname";
        acumErrores++;
    }

    //--VALIDATION LASTNAME--//
    if (inputLastName.value == "" || inputLastName.length != 2) {
        inputLastName.classList.add("is-invalid");
        document.getElementById("errorLastName").textContent = "You have to introduce your Lastname";
        acumErrores++;
    }



    //--VALIDATION ADDRESS--//
    if (inputAddress.value == "") {
        inputAddress.classList.add("is-invalid");
        document.getElementById("errorAddress").textContent = "Please, you have to fill up this field";
        acumErrores++;
    }

    //--VALIDATION PHONE--//
    if (inputPhone.value == "") {
        inputPhone.classList.add("is-invalid");
        document.getElementById("errorPhone").textContent = "Please, fill up this field";
        acumErrores++;
    }


    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}

//--CREATE FUNCTION FOR BLUR EFFECT--//
form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);




//create a function to validate email
function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}


//create a function to validate password
function validate_password(password) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(password) ? true : false;
}