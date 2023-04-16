/*const body = document.querySelector("body");
let x;

document.getElementById("mybtn").onclick = function () {
  x = Math.floor(Math.random() * 6);

  const h1 = document.createElement("h1");
  h1.setAttribute("id", "randomNumber");

  body.appendChild(h1);
  h1.textContent = x;

  document.getElementById;
};
*/

let x;

document.getElementById("mybtn").onclick = function () {
  x = Math.floor(Math.random() * 65);

  document.getElementById("xlabel").innerHTML = x;
};
