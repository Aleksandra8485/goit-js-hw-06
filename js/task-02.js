const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ul.insertAdjacentElement("afterbegin", li);
  ul.classList.add("item");
}

console.log(ul);

//Napisz skrypt, który dla każdego elementu tablicy ingredients:
//odniesienie do elementu
//const ul = document.querySelector("#ingredients");
//1)Utworzy oddzielny element <li>. metoda document.createElement().
//const li = document.createElement("li");
//2)Dodać nazwę elementu jako jego zawartość tekstową.
//li.textContent = ingredient;
//3)Dodać do elementu klasę item.
//elem.classList.add(cls)=>ul.classList.add("item");
//4)Po czym umieści wszystkie <li> na liście
//podczas jednej operacji ul#ingredients.
