// Slide panel and button
const panelChoices = document.querySelector(".choices");
const btnChoices = document.querySelector(".btn-choices");

// Panels
const panelLogin = document.querySelector(".form-login");
const panelSignIn = document.querySelector(".form-signin");

// Login and Sign-in forms
const formLogin = document.getElementById("form-login");
const formSignIn = document.getElementById("form-signin");

btnChoices.addEventListener("click", slidePanel);
// Execute the slide panel animation
function slidePanel() {
  if (panelChoices.classList.contains("on-right")) {
    panelChoices.classList.remove("on-right");
    panelChoices.style.left = 0;
    panelChoices.style.backgroundPosition = "right";
    panelLogin.style.opacity = 0;
    panelSignIn.style.opacity = 1;
    btnChoices.innerText = "I already have an account !";
  } else {
    panelChoices.classList.add("on-right");
    panelChoices.style.left = "50%";
    panelChoices.style.backgroundPosition = "left";
    panelLogin.style.opacity = 1;
    panelSignIn.style.opacity = 0;
    btnChoices.innerText = "Don't hava an account ?";
  }
}

// Function for Login
formLogin.onsubmit = async (e) => {
  e.preventDefault();

  // Input fields from Login form
  const emailLogin = document.getElementById("email-login").value;
  const passLogin = document.getElementById("pass-login").value;
  let email = sessionStorage.getItem("email");
  let pass = sessionStorage.getItem("pass");
  let warning = "";

  if (
    sessionStorage.getItem("email") == null ||
    sessionStorage.getItem("pass") == null
  ) {
    // Logic to pop-up
    warning = `<p>You still dont have an account!</p>`;
    showPopUp(warning);
  } else {
    if (email == emailLogin && pass == passLogin) {
      window.open("https://www.linkedin.com/in/henrique-poletti-0a089a213/");
      sessionStorage.clear();
    } else {
      warning = `<p>Account not found!</p>`;
      showPopUp(warning);
    }
  }
};

// Function for Sign-In
formSignIn.onsubmit = async (e) => {
  e.preventDefault();

  // Input fields from Sign-In form
  const emailSignIn = document.getElementById("email-signin").value;
  const emailSignInConfirm = document.getElementById(
    "email-signin-confirm"
  ).value;
  const passSignIn = document.getElementById("pass-signin").value;
  let warning = "";

  if (emailSignIn != emailSignInConfirm) {
    // Logic to pop-up
    warning = `<p>E-mails must be equal!</p>`;
    showPopUp(warning);
    return;
  } else {
    // Stores the registration in the session
    sessionStorage.setItem("email", emailSignIn);
    sessionStorage.setItem("email-confirm", emailSignInConfirm);
    sessionStorage.setItem("pass", passSignIn);

    warning = `<p>Account registred!</p>`;
    showPopUp(warning);
  }
};

function showPopUp(message) {
  const alertPopUp = document.querySelector(".custom-alert");
  alertPopUp.innerHTML = message;
  alertPopUp.style.top = "20px";
  setTimeout(function () {
    alertPopUp.style.top = "-100px";
  }, 3000);
}
