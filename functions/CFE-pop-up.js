const openLoginBtn = document.getElementById("open-login-btn");
const overlay = document.getElementById("overlay");
const loginPopUp = document.getElementById("login-pop-up");

openLoginBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  loginPopUp.classList.add("show-pop-up");
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
    loginPopUp.classList.remove("show-pop-up");
  }
});