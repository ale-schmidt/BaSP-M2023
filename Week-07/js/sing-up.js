//TODOS LOS CAMPOS REQUERIDOS

window.onload = function () {
  var localStorageData = JSON.parse(localStorage.getItem("userData"));
  document.getElementById("name").value = localStorageData.data.name;
  document.getElementById("lastName").value = localStorageData.data.lastName;
  document.getElementById("dni").value = localStorageData.data.dni;

  var newDate = localStorageData.data.dob;
  var dateEl = newDate.split("/");
  var newformattedDate = dateEl[2] + "-" + dateEl[0] + "-" + dateEl[1];

  document.getElementById("dob").value = newformattedDate;
  document.getElementById("phone").value = localStorageData.data.phone;
  document.getElementById("address").value = localStorageData.data.address;
  document.getElementById("city").value = localStorageData.data.city;
  document.getElementById("zip").value = localStorageData.data.zip;
  document.getElementById("email").value = localStorageData.data.email;
  document.getElementById("password").value = localStorageData.data.password;
  document.getElementById("repeatPassword").value =
    localStorageData.data.repeatPassword;
};
var divErrors = document.getElementsByClassName("error");
var nameInput = document.getElementById("name");
var lastNameInput = document.getElementById("lastName");
var dniInput = document.getElementById("dni");
var birthDateInput = document.getElementById("dob");
var phoneInput = document.getElementById("phone");
var addressInput = document.getElementById("address");
var locationInput = document.getElementById("city");
var postCodeInput = document.getElementById("zip");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("repeatPassword");

var nameInputValue = nameInput.value;
var lastNameInputValue = lastNameInput.value;
var dniInputValue = dniInput.value;
var birthDateInputValue = birthDateInput.value;
var phoneInputValue = phoneInput.value;
var addressInputValue = addressInput.value;
var locationInputValue = locationInput.value;
var postCodeInputValue = postCodeInput.value;
var emailInputValue = emailInput.value;
var passwordInputValue = passwordInput.value;
var repeatPasswordInputValue = repeatPasswordInput.value;

// ON CLICK
function nameErrorFunction() {
  nameValue = nameInput.value.trim();
  if (nameValue) {
    if (!validateCharCodeNameAndLastName(nameValue) || nameValue.length <= 3) {
      return false;
    } else {
      return true;
    }
  }
}

function lastNamedErrorFunction() {
  lastNameValue = lastNameInput.value.trim();
  if (lastNameValue) {
    if (
      !validateCharCodeNameAndLastName(lastNameValue) ||
      lastNameValue.length <= 3
    ) {
      return false;
    } else {
      return true;
    }
  }
}

function dniErrorFunction() {
  dniValue = dniInput.value.trim();
  if (dniValue) {
    if (!validateCharCodeDNI(dniValue) || dniValue.length <= 7) {
      return false;
    } else {
      return true;
    }
  }
}

function birthDatedErrorFunction() {
  var date = birthDateInput.value;
  var birthDate = new Date(birthDateInput.value);
  var currentDate = new Date();
  if (birthDate) {
    if (birthDate.getTime() >= currentDate.getTime() || date === "") {
      return false;
    } else {
      return true;
    }
  }
}

function phoneErrorFunction() {
  phoneValue = phoneInput.value.trim();
  if (phoneValue) {
    if (!validateCharCodePhone(phoneValue) || phoneValue.length !== 10) {
      return false;
    } else {
      return true;
    }
  }
}

function addressErrorFunction() {
  addressValue = addressInput.value.trim();
  var stringsList = addressValue.split(" ");
  if (addressValue) {
    if (addressOk(stringsList) === false) {
      return false;
    } else {
      return true;
    }
  }
}

function locationErrorFunction() {
  locationValue = locationInput.value.trim();
  if (locationValue) {
    if (!validateCharCode(locationValue) || locationValue.length < 3) {
      return false;
    } else {
      return true;
    }
  }
}

function postCodeErrorFunction() {
  postCodeValue = postCodeInput.value.trim();
  if (postCodeValue) {
    if (
      !validateCharCodePostCode(postCodeValue) ||
      postCodeValue.length < 4 ||
      postCodeValue.length > 5
    ) {
      return false;
    } else {
      return true;
    }
  }
}

function emailErrorFunction() {
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue) {
    if (!emailRegex.test(emailValue)) {
      return false;
    } else {
      return true;
    }
  }
}

var validateInformation = function () {
  var arrayErrors = [];
  if (!nameErrorFunction()) {
    arrayErrors.push("There is an error in the name format");
  }
  if (!lastNamedErrorFunction()) {
    arrayErrors.push("\nThere is an error in the last name format");
  }
  if (!dniErrorFunction()) {
    arrayErrors.push("\nThere is an error in the DNI format");
  }
  if (!birthDatedErrorFunction()) {
    arrayErrors.push("\nThere is an error in the birth date format");
  }
  if (!phoneErrorFunction()) {
    arrayErrors.push("\nThere is an error in the phone format");
  }
  if (!addressErrorFunction()) {
    arrayErrors.push("\nThere is an error in the address format");
  }
  if (!locationErrorFunction()) {
    arrayErrors.push("\nThere is an error in the location format");
  }
  if (!postCodeErrorFunction()) {
    arrayErrors.push("\nThere is an error in the post code format");
  }
  if (!emailErrorFunction()) {
    arrayErrors.push("\nThere is an error in the email format");
  }

  return arrayErrors;
};

document
  .getElementById("sing-up-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (validateInformation() == "") {
      alert(
        "name: " +
          nameInput.value +
          " " +
          "\nLast Name: " +
          lastNameInput.value +
          " " +
          "\nDNI: " +
          dniInput.value +
          " " +
          "\nBirth Date: " +
          birthDateInput.value +
          " " +
          "\nPhone: " +
          phoneInput.value +
          " " +
          "\nAddress: " +
          addressInput.value +
          " " +
          "\nLocation: " +
          locationInput.value +
          " " +
          "\nPost Code: " +
          postCodeInput.value +
          " " +
          "\nEmail: " +
          emailInput.value +
          " " +
          "\nPassword: " +
          passwordInput.value +
          " " +
          "\nRepeat Password: " +
          repeatPasswordInput.value
      );
    } else {
      alert(validateInformation());
    }

    var date = birthDateInput.value;
    var dateEl = date.split("-");
    var formattedDate = dateEl[1] + "/" + dateEl[2] + "/" + dateEl[0];

    var error = false;
    for (var i = 0; i < divErrors.length; i++) {
      if (!(divErrors[i].textContent === "")) {
        error = true;
      }
    }

    if (!error) {
      var url = `https://api-rest-server.vercel.app/signup?name=${nameInput.value}&lastName=${lastNameInput.value}&dni=${dniInput.value}&dob=${formattedDate}&phone=${phoneInput.value}&address=${addressInput.value}&city=${locationInput.value}&zip=${postCodeInput.value}&email=${emailInput.value}&password=${passwordInput.value}&repeatPassword=${repeatPasswordInput.value}`;
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          alert("sing up success! Received data: " + JSON.stringify(data));
          localStorage.setItem("userData", JSON.stringify(data));
          var userData = localStorage.getItem("userData");
          if (userData) {
            var userObj = JSON.parse(userData);
          }
          return data;
        })
        .catch(function (error) {
          console.error(error);
          alert("There is an error, try again");
        });
    }
  });

//VALIDAR NAME
//Nombre: Solo letras y debe tener más de 3 letras.
var nameError = document.getElementById("name-error");

function validateCharCodeNameAndLastName(nameValue) {
  for (var i = 0; i < nameValue.length; i++) {
    var charCode = nameValue.charCodeAt(i);
    if (
      charCode > 47 &&
      charCode < 58 &&
      !(charCode > 64 && charCode < 91) &&
      !(charCode > 96 && charCode < 123)
    ) {
      return false;
    }
  }
  return true;
}

nameInput.addEventListener("blur", function () {
  nameValue = nameInput.value.trim();

  if (nameValue === "") {
  } else {
    if (nameValue.length <= 3) {
      nameInput.classList.add("error");
      nameError.textContent = "Name must have more than 3 letters";
    } else if (!validateCharCodeNameAndLastName(nameValue)) {
      nameInput.classList.add("error");
      nameError.textContent = "Name must have only letters";
    } else {
      nameInput.classList.remove("error");
      nameError.textContent = "";
    }
  }
});

nameInput.addEventListener("focus", function () {
  nameInput.classList.remove("error");
  nameError.textContent = "";
});

//VALIDAR LAST NAME
//Apellido: Solo letras y debe tener más de 3 letras.
var lastNameError = document.getElementById("last-name-error");

lastNameInput.addEventListener("blur", function () {
  lastNameValue = lastNameInput.value.trim();

  if (lastNameValue === "") {
  } else {
    if (lastNameValue.length <= 3) {
      lastNameInput.classList.add("error");
      lastNameError.textContent = "LastName must have more than 3 letters";
    } else if (!validateCharCodeNameAndLastName(lastNameValue)) {
      lastNameInput.classList.add("error");
      lastNameError.textContent = "LastName must have only letters";
    } else {
      lastNameInput.classList.remove("error");
      lastNameError.textContent = "";
    }
  }
});

lastNameInput.addEventListener("focus", function () {
  lastNameInput.classList.remove("error");
  lastNameError.textContent = "";
});

//VALIDAR DNI
//DNI: Solo números y debe tener más de 7 números.
var dniError = document.getElementById("dni-error");
function validateCharCodeDNI(dniValue) {
  for (var i = 0; i < dniValue.length; i++) {
    var charCode = dniValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

dniInput.addEventListener("blur", function () {
  dniValue = dniInput.value.trim();
  if (dniValue === "") {
  } else {
    if (dniValue.length <= 7) {
      dniInput.classList.add("error");
      dniError.textContent = "DNI must have between 7 and 8 numbers";
    } else if (!validateCharCodeDNI(dniValue)) {
      dniInput.classList.add("error");
      dniError.textContent = "DNI must have only numbers";
    } else {
      dniInput.classList.remove("error");
      dniError.textContent = "";
    }
  }
});

dniInput.addEventListener("focus", function () {
  dniInput.classList.remove("error");
  dniError.textContent = "";
});

//VALIDAR BIRTH DATE
//Fecha de Nacimiento: Con formato dd/mm/aaaa.
var birthDateError = document.getElementById("birth-date-error");
var date = birthDateInput.value;

function valDate() {
  var birthDate = new Date(birthDateInput.value);
  console.log(typeof birthDate);
  if (birthDateInput.value.trim() === "") {
    birthDateInput.classList.add("error");
    birthDateError.textContent = "Date of birth is required";
  } else if (isNaN(birthDate.getTime())) {
    birthDateInput.classList.add("error");
    birthDateError.textContent = "Date of birth must have format DD/MM/YYYY";
  } else if (birthDate > new Date()) {
    birthDateInput.classList.add("error");
    birthDateError.textContent = "Date of birth cannot be in the future";
  } else {
    birthDateInput.classList.remove("error");
    birthDateError.textContent = "";
  }
}

birthDateInput.addEventListener("change", function () {
  valDate(date);
});

// var birthDateError = document.getElementById("birth-date-error");
// var date = birthDateInput.value;
// function valDate() {
//   if (!birthDateInput.value) {
//     return false;
//   }
//   var birthDate = new Date(birthDateInput.value);
//   var currentDate = new Date();
//   if (birthDate.getTime() >= currentDate.getTime()) {
//     birthDateInput.classList.add("error");
//     birthDateError.textContent = "Wrong date format.";
//   } else {
//     birthDateInput.classList.remove("error");
//     birthDateError.textContent = "";
//   }
// }

birthDateInput.addEventListener("change", function () {
  valDate(date);
});

//VALIDAR PHONE
//Teléfono: Solo números y debe tener 10 números.
var phoneError = document.getElementById("phone-error");
function validateCharCodePhone(phoneValue) {
  for (var i = 0; i < phoneValue.length; i++) {
    var charCode = phoneValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

phoneInput.addEventListener("blur", function () {
  phoneValue = phoneInput.value.trim();
  if (phoneValue === "") {
  } else {
    if (!validateCharCodePhone(phoneValue)) {
      phoneInput.classList.add("error");
      phoneError.textContent = "Phone must have only numbers";
    } else if (phoneValue.length !== 10) {
      phoneInput.classList.add("error");
      phoneError.textContent = "Phone must have 10 numbers";
    } else {
      phoneInput.classList.remove("error");
      phoneError.textContent = "";
    }
  }
});

phoneInput.addEventListener("focus", function () {
  phoneInput.classList.remove("error");
  phoneError.textContent = "";
});

//VALIDAR ADRRESS
//Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
function addressOk(stringsList) {
  if (stringsList.length > 2 || stringsList[0].length < 3) {
    return false;
  } else {
    if (
      stringsList[0].length >= 3 &&
      validateCharCode(stringsList[0]) &&
      validateCharCode(stringsList[1])
    ) {
      return true;
    } else {
      return false;
    }
  }
}

var addressError = document.getElementById("address-error");
addressInput.addEventListener("blur", function () {
  var addressValue = addressInput.value.trim();
  var stringsList = addressValue.split(" ");

  if (!addressOk(stringsList)) {
    if (!addressValue.includes(" ")) {
      addressError.textContent = "Address must have a space in the middle";
    } else {
      addressError.textContent = "Address must have more than 3 letters";
    }
    addressInput.classList.add("error");
  } else {
    addressInput.classList.remove("error");
    addressError.textContent = "";
  }
});

addressInput.addEventListener("focus", function () {
  addressInput.classList.remove("error");
  addressError.textContent = "";
});

//VALIDAR LOCATION
//Localidad: Texto alfanumérico y debe tener más de 3 letras.
var locationError = document.getElementById("location-error");
function validateCharCodeLocation(locationValue) {
  for (var i = 0; i < locationValue.length; i++) {
    var charCode = locationValue.charCodeAt(i);
    if (
      !(charCode > 47 && charCode < 58) &&
      !(charCode > 64 && charCode < 91) &&
      !(charCode > 96 && charCode < 123)
    ) {
      return false;
    }
  }
  return true;
}
locationInput.addEventListener("blur", function () {
  locationValue = locationInput.value.trim();
  if (locationValue === "") {
  } else {
    if (locationValue.length < 3) {
      locationInput.classList.add("error");
      locationError.textContent = "Must have at least 3 letters";
    } else if (!validateCharCode(locationValue)) {
      locationInput.classList.add("error");
      locationError.textContent = "Must contain numbers and letters";
    } else {
      locationInput.classList.remove("error");
      locationError.textContent = "";
    }
  }
});

postCodeInput.addEventListener("focus", function () {
  locationInput.classList.remove("error");
  locationError.textContent = "";
});

//VALIDAR POST CODE
//Código Postal: Solo números y debe tener entre 4 y 5 números.
var postCodeError = document.getElementById("post-code-error");
function validateCharCodePostCode(postCodeValue) {
  for (var i = 0; i < postCodeValue.length; i++) {
    var charCode = postCodeValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

postCodeInput.addEventListener("blur", function () {
  postCodeValue = postCodeInput.value.trim();

  if (postCodeValue === "") {
  } else {
    if (!validateCharCodePostCode(postCodeValue)) {
      postCodeInput.classList.add("error");
      postCodeError.textContent = "Must be only numbers";
    } else if (postCodeValue.length < 4 || postCodeValue.length > 5) {
      postCodeInput.classList.add("error");
      postCodeError.textContent = "Must be 4 or 5 numbers";
    } else {
      postCodeInput.classList.remove("error");
      postCodeError.textContent = "";
    }
  }
});

postCodeInput.addEventListener("focus", function () {
  postCodeInput.classList.remove("error");
  postCodeError.textContent = "";
});

//VALIDAR EMAIL
//Email: Debe tener un formato de email válido.
var emailError = document.getElementById("email-error");
emailInput.addEventListener("blur", function () {
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
  } else {
    if (!emailRegex.test(emailValue)) {
      emailInput.classList.add("error");
      emailError.textContent = "Wrong format, try example@email.com";
    } else {
      emailInput.classList.remove("error");
      emailError.textContent = "";
    }
  }
});

emailInput.addEventListener("focus", function () {
  emailInput.classList.remove("error");
  emailError.textContent = "";
});

//VALIDAR PASSWORD
//Contraseña: Al menos 8 caracteres, formados por letras y números.
// función para chequear que sean solo números o letras

//VALIDAR REPEAT PASSWORD
//Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.
function validateCharCode(passwordValue) {
  for (var i = 0; i < passwordValue.length; i++) {
    var charCode = passwordValue.charCodeAt(i);
    if (
      !(charCode > 47 && charCode < 58) &&
      !(charCode > 64 && charCode < 91) &&
      !(charCode > 96 && charCode < 123)
    ) {
      return false;
    }
  }
  return true;
}

var passwordError = document.getElementById("password-error");
var repeatPasswordError = document.getElementById("repeatPassword-error");

function validatePasswords() {
  var passwordValue = passwordInput.value.trim();
  var repeatPasswordValue = repeatPasswordInput.value.trim();

  if (passwordValue === "" || repeatPasswordValue === "") {
  }

  if (passwordValue.length < 8) {
    passwordInput.classList.add("error");
    passwordError.textContent = "Must be at least 8 characters long";
    // return false;
  } else if (!validateCharCode(passwordValue)) {
    passwordInput.classList.add("error");
    passwordError.textContent = "Must have letters and numbers only";
    // return false;
  }

  if (passwordValue !== repeatPasswordValue) {
    repeatPasswordInput.classList.add("error");
    repeatPasswordError.textContent = "Not coincident password.";
    return false;
  }

  passwordInput.classList.remove("error");
  passwordError.textContent = "";
  repeatPasswordInput.classList.remove("error");
  repeatPasswordError.textContent = "";
  return true;
}

passwordInput.addEventListener("blur", validatePasswords);
repeatPasswordInput.addEventListener("blur", validatePasswords);

passwordInput.addEventListener("focus", function () {
  passwordInput.classList.remove("error");
  passwordError.textContent = "";
});

repeatPasswordInput.addEventListener("focus", function () {
  repeatPasswordInput.classList.remove("error");
  repeatPasswordError.textContent = "";
});
