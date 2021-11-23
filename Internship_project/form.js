var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var mail = document.getElementById("mail");
//var text = document.getElementById("text");

myInput.onfocus = function () {
    document.getElementById("mess").style.display = "block";
}

//when the user clicks outside of the password field hide the msg box
myInput.onblur = function () {
    document.getElementById("mess").style.display = "none";
}

//when user starts to type something inside the password field 
myInput.onkeyup = function () {
    //valid email address
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (myInput.value.match(pattern)) {
        
        mail.classList.remove("invalid");
        mail.classList.add("valid");
    } else {
        mail.classList.remove("valid");
        mail.classList.add("invalid");
    }
    if (mail = "") {
       mail.classList.add("valid");
       mail.classList.remove("invalid");
   } 
}
//when the user clicks on the password field show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

//when the user clicks outside of the password field hide the msg box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}
myInput.onkeyup = function () {
    //validate lowercase letters
    var lowerCaseLetters =/[a-z]/g;
    
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //validate uppercase letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    //validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //validate length 
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}




