import {picturesListElement} from './render-cards.js';
import {openBigPicture} from './render-photo.js';

import './img-upload-form.js';

console.log('Файл main.js Работает');
picturesListElement.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  // evt.preventDefault();
  if (currentPicture) {
    openBigPicture(currentPicture.dataset.pictureId);
  }
});


