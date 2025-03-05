// get the id
const theme = document.getElementById("theme");
const changeTheme = document.getElementById('change-theme');


// change bg color button's  event
changeTheme.addEventListener("click", function () {
  const bgColor = randomRgbColor();
  theme.style.backgroundColor = bgColor;
});

// Random RGB color function
function randomRgbColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
