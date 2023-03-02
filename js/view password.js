let password = document.querySelector("#password");
let showPassword = document.querySelector("#show-pass");
let eyeOff = document.querySelector(".eye__off");

showPassword.onchange = function () {
  if (showPassword.checked) {
      password.type = "text";
      eyeOff.classList.add('hidden')
  } else {
      password.type = "password";
      eyeOff.classList.remove("hidden");
  }
};



