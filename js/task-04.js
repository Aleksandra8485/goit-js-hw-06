let counterValue = 0;

const decrementCount = document.querySelector("[data-action ='decrement']");
const incrementCount = document.querySelector("[data-action ='increment']");
const totalValue = document.querySelector("#value");

//dodanie click event do buttona
decrementCount.addEventListener("click", () => {
  // wartość decrement = spada o 1 po kliknieciu
  counterValue--;
  //przypisanie wartości totalValue do DOM
  totalValue.innerHTML = counterValue--;
});
// wartość decrement = rośnie o 1 po kliknieciu
incrementCount.addEventListener("click", () => {
  counterValue++;
  //przypisanie wartości totalValue do DOM
  totalValue.innerHTML = counterValue++;
});
