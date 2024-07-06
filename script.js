let signUpButton = document.getElementById("signUp");
let signInButton = document.getElementById("signIn");
let switchToSignIn = document.getElementById("switchToSignIn");
let switchToSignUp = document.getElementById("switchToSignUp");
let container = document.getElementById("container");
let toggleThemeButton = document.getElementById("toggleTheme");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

switchToSignIn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

switchToSignUp.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

function togglePassword(id) {
  const passwordField = document.getElementById(id);
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

window.addEventListener("load", () => {
  if (window.innerWidth <= 768) {
    container.classList.remove("right-panel-active");
  }
});
