const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "anonymous";
  }
});

// 2 rozwiazanie
// const input = document.getElementById("name-input");
// const span = document.getElementById("name-output");
//  input.addEventListener("input", () => {
// span.innerHTML = !input.value ? "anonymous" : input.value; });
