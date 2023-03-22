const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const photos = document.querySelector(".gallery");
console.log(photos);

for (const image of images) {
  const url = `<li>
      <img style="width: 500px;" src="${image.url}" alt="${image.alt}" />
    </li>`;
  photos.insertAdjacentHTML("afterBegin", url);
}

photos.style.display = "flex";
photos.style.flexWrap = "wrap";
photos.style.listStyle = "none";

//2 rozwiązanie z map i innerHTML
//document.body.innerHTML = images.map((image) => `<img src=${image.url} alt=${image.alt} />`).join("");

//3 rozwiązanie
//const gallery = document.querySelector('.gallery')
// gallery.insertAdjacentHTML(
//   'beforeend',
//   images
//     .map(
//       (item) =>
//         <li><img class="gallery__item" src="${item.url}" alt="${item.alt}"/></li>
//     )
//     .join('')
// )

// 4 rozwiązanie
// const photo = document.querySelectorAll("images");
// for (const image of images) {
// document.body.innerHTML = images.map(
//  (image) =>
// <img style="width: 500px; display: flex"src=${image.url} alt${image.alt} />
// );
// photo.insertAdjacentHTML("afterBegin", images);
// }

//5 rozwiązanie
// images.forEach((item) => {
//   gallery.insertAdjacentHTML(
//     "beforeend",
//     <li>
//       <img class="gallery__item" src="${item.url}" alt="${item.alt}" />
//     </li>
//   );
// });
