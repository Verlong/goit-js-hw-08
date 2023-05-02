// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css'; // Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox,
//     яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна,
//     а також гортання зображень за допомогою клавіатури.

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery'); // встановлена змінна <ul class="gallery"></ul>
galleryList.style.listStyleType = 'none';
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description} />
   </a>
</li>`;
  })
  .join(''); // створена змінна розмітки всередині ul class="gallery"

galleryList.insertAdjacentHTML('afterbegin', galleryMarkup); // розмітка поміщена всередині  ul class="gallery"

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
}); //підключення бібліотеки + додала відображення підписів до зображень з атрибута alt
