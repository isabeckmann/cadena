const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");

$checkbox.addEventListener("change", function () {
  $html.classList.toggle("dark-mode");

  if (this.checked) {
    document.getElementById("logo-switch").src = "../images/logo.white.svg";
    document.getElementById("logo-footer-sw").src = "../images/logo.white.svg";
  } else {
    document.getElementById("logo-switch").src = "../images/Union.svg";
    document.getElementById("logo-footer-sw").src = "../images/Union.svg";
  }

  if (this.checked) {
    document.getElementById("seta-sw").src = "../images/seta.dark.svg";
  } else {
    document.getElementById("seta-sw").src = "../images/Vector.svg";
  }

  if (this.checked) {
    document.getElementById("cards-switch").src = "../images/cards.dark.png";
  } else {
    document.getElementById("cards-switch").src = "../images/cards.png";
  }
});
