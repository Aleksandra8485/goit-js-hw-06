//wybieram wszystkie elementy li.item i wyświetlam długości tablicy
const categoryList = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categoryList.length}`);

//Dla każdego elementu li.item na liście ul#categories,
//znajdź i wprowadż tekst nagłówka elementu (tag <h2>)
//i liczbę elementów w kategorii (wszystkich <li>)
console.log(`Category: ${categoryList[0].firstElementChild.textContent}`);
console.log(`Elements: ${categoryList[0].lastElementChild.children.length}`);

console.log(`Category: ${categoryList[1].firstElementChild.textContent}`);
console.log(`Elements: ${categoryList[1].lastElementChild.children.length}`);

console.log(`Category: ${categoryList[2].firstElementChild.textContent}`);
console.log(`Elements: ${categoryList[2].lastElementChild.children.length}`);

//opcja z pętlą for of
//for (const element of categoryList) {
//  console.log(`Category: ${element.children[0].innerText}`);
//
//  console.log(`element: ${element.children[1]}`);
//}
