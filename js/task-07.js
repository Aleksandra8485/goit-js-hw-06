const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", function () {
  textEl.style.fontSize = inputEl.value + "px";
});

// const fontSizeControlEl = document.getElementById("font-size-control");
// const textEl = document.getElementById("text");
// let counter = 0;
// const changeFontSize = () => {
//   textEl.style.fontSize = fontSizeControlEl.value + "px";
//   console.log(textEl.style.fontSize);
// };
//------------------------------------------------
// const inputEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");

// textEl.style.fontSize = inputEl.value + "px";

// inputEl.addEventListener("input", (e) => {
//   textEl.style.fontSize = e.currentTarget.value + "px";
// });
