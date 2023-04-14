const body = document.querySelector("body");
const button = document.getElementById("mybtn");

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomNumber(event) {
  event.preventDefault();

  const h1 = document.createElement("h1");
  h1.textContent = `${random(65)}`;

  body.appendChild(h1);
  clearInputs();
}
function clearInputs() {
  h1.value = "";
}

button.addEventListener("click", randomNumber);
