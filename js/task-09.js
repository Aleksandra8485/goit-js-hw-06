function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  colorEl.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
