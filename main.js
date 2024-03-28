// Block to slide the panel and chance forms
const panelChoices = document.querySelector(".choices");
const btnChoices = document.querySelector(".btn-choices");

const panelLogin = document.querySelector(".form-login");
const panelSignIn = document.querySelector(".form-signin");

btnChoices.addEventListener("click", slidePanel);

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

// Block to execute Login and Sign In events
const formLogin = document.getElementById("form-login");
const formSignIn = document.getElementById("form-signin");

formLogin.onsubmit = async (e) => {
  e.preventDefault();
  // Input fields from Login form
  const emailLogin = document.getElementById("email-login").value;
  const passLogin = document.getElementById("pass-login").value;
  alert(`Value E-mail: ${emailLogin} - Value Pass: ${passLogin}`);
};

formSignIn.onsubmit = async (e) => {
  e.preventDefault();
  const emailSignIn = document.getElementById("email-signin").value;
  const emaiConfirmlSignIn = document.getElementById(
    "email-signin-confirm"
  ).value;
  const passSignIn = document.getElementById("pass-signin").value;
  alert(
    `Value E-mail: ${emailSignIn} - Value E-mail Confirm: ${emaiConfirmlSignIn} - Value Pass: ${passSignIn}`
  );
};
