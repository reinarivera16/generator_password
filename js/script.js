// Assignment Code
var passlength = document.getElementById("passlength");
var inputlength = document.getElementById("inputlength");
var lcase = document.getElementById("lcase");
var ucase = document.getElementById("ucase");
var num = document.getElementById("num");
var special_char = document.getElementById("special_char");
var genpass = document.getElementById("generateApassword");
var lenBox = document.getElementById("lenBox");
var show_passwordcriteria = document.getElementById("show_passwordcriteria");
var passwordcriteria = document.getElementById("passwordcriteria");
var getpassword = document.getElementById("getpassword");
var generatedpassword = document.getElementById("generatedpassword");
var newpassword = document.getElementById("newpassword");
var generatenew = document.getElementById("generatenew");
var backtohome = document.getElementById("backtohome");

// SHOW WINDOW for the length of the password
genpass.addEventListener("click", function () {
  genpass.classList.add("hide");
  lenBox.classList.remove("hide");
});
// WINDOW for the password Criteria
show_passwordcriteria.addEventListener("click", function () {
  lenBox.classList.add("hide");
  passwordcriteria.classList.remove("hide");
});
// INPUT USING RANGE
passlength.addEventListener("input", function () {
  inputlength.value = passlength.value;
});
// INPUT USING TEXTFIELD
inputlength.addEventListener("input", function () {
  if (inputlength.value > 128) {
    alert("Maximum Length is : 128");
    inputlength.value = 128;
    passlength.value = inputlength.value;
  }
});
// VALIDATION FOR LENGTH MINIMUM 8
inputlength.addEventListener("focusout", function () {
  if (inputlength.value < 8) {
    alert("Minimumx Length is : 8");
    passlength.value = 8;
    inputlength.value = 8;
  } else {
    passlength.value = inputlength.value;
  }
});
// ATLEAST ONE PASSWORD Criteria SELECT/CHOOSE
[lcase, ucase, num, special_char].forEach(function (element) {
  element.addEventListener("input", atleastOne);
});

function atleastOne() {
  if (lcase.checked || ucase.checked || num.checked || special_char.checked) {
    getpassword.removeAttribute("disabled");
  } else {
    getpassword.setAttribute("disabled", "disabled");
  }
}

// GET PASSWORD BUTTON
getpassword.addEventListener("click", passwordGenerator);

function passwordGenerator() {
  var p_len = passlength.value;
  var special_key = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var lower_key = "abcdefghijklmnopqrstuwvxyz";
  var upper_key = "ABCDEFGHIJKLMNOPQRSTUWVXYZ";
  var num_key = "0123456789";
  var password = "";
  var collect = "";
  while (collect.length < p_len) {
    if (lcase.checked) {
      collect += lower_key.charAt(Math.floor(Math.random() * lower_key.length));
    }
    if (ucase.checked) {
      collect += upper_key.charAt(Math.floor(Math.random() * upper_key.length));
    }
    if (num.checked) {
      collect += num_key.charAt(Math.floor(Math.random() * num_key.length));
    }
    if (special_char.checked) {
      collect += special_key.charAt(
        Math.floor(Math.random() * special_key.length)
      );
    }
  }
  password = collect;
  passwordcriteria.classList.add("hide");
  generatedpassword.classList.remove("hide");
  newpassword.innerText = password;
}
// GENERATE NEW PASSWORD BUTTON
generatenew.addEventListener("click", passwordGenerator);
// BACK TO HOME BUTTON
backtohome.addEventListener("click", backToHome);
function backToHome() {
  generatedpassword.classList.add("hide");
  genpass.classList.remove("hide");
  passlength.value = 8;
  inputlength.value = 8;
  [lcase, ucase, num, special_char].forEach(function (element) {
    element.checked = false;
  });
  getpassword.setAttribute("disabled", "disabled");
}
