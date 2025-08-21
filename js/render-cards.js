import {photos} from './data.js';
const picturesListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesFragment = document.createDocumentFragment();

photos.forEach(({id, url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.dataset.pictureId = id;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesFragment.appendChild(pictureElement);
});

picturesListElement.appendChild(picturesFragment);
export {picturesListElement};
console.log('render-cards Подключен');
console.log(picturesListElement);
