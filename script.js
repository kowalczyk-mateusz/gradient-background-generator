var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector(".random");
var body = document.getElementById("gradient");

function generateRandomColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function setColor() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);

random.addEventListener("click", function () {
  generate1 = generateRandomColor();
  generate2 = generateRandomColor();
  body.style.background =
    "linear-gradient(to right, " + generate1 + "," + generate2 + ")";
  color1.value = generate1;
  color2.value = generate2;
  css.textContent = body.style.background + ";";
});
