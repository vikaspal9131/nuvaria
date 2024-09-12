const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text"); // Change to text to show password
    togglePassword.classList.replace("ri-focus-3-line", "ri-eye-off-line"); // Optionally change icon
  } else {
    password.setAttribute("type", "password"); // Change back to password to hide
    togglePassword.classList.replace("ri-eye-off-line", "ri-focus-3-line"); // Revert icon
  }
});



