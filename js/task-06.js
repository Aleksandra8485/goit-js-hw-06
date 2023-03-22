const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.value.length === +inputEl.dataset.length
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
});

//przy utracie fokusu na polu input (zdarzenie blur)
//sprawdza czy wartość wprowadzona przez użytkownika
//spełnia warunek walidacji (ma odpowiednią długość)

// odpowiednią liczbę symboli, to border pola input staje się zielony
//liczba jest nieprawidłowa - czerwony.

// 2 rozwiazanie
// const inputEl = document.querySelector('#validation-input')
// const inputLength = inputEl.dataset

// inputEl.addEventListener('blur', () => {
//   inputEl.value.length === Number(inputLength.length)
//     ? (inputEl.className = 'valid')
//     : (inputEl.className = 'invalid')
// })
