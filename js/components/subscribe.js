const form = document.querySelector("#subscribeForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector(".thankyou-message");

function validateForm(event) {
  event.preventDefault();

  if (firstName.value.trim().length > 4 && validateEmail(email.value)) {
    firstNameError.style.display = "none";
    emailError.style.display = "none";

    successMessage.innerHTML = "Thank you!";

  } else {
    firstNameError.style.display = "block";
    emailError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
  const emailValidation = /\S+@\S+\.\S+/;
  const testMatch = emailValidation.test(email);
  return testMatch;
}