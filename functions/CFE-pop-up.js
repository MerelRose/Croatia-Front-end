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

document.getElementById('open-login-btn').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('register-pop-up').classList.add('show-pop-up');
});

document.getElementById('overlay').addEventListener('click', function(event) {
  if (event.target === this) {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('register-pop-up').classList.remove('show-pop-up');
  }
});