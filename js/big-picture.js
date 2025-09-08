// import { openBigPicture } from './render-photo.js';
// import {renderThumbnails} from './render-cards.js';

// const pictureContainer = document.querySelector('.pictures');
// let pictures = [];

// function renderBigPhoto(picturesData) {
//   clearBigPhoto();
//   pictures = picturesData;
//   renderThumbnails(picturesData);
//   pictureContainer.addEventListener('click', onBigPhotoClick);
// }

// function onBigPhotoClick (evt) {
//   const picture = evt.target.closest('a.picture[data-id]');
//   if(!picture) {
//     return;
//   }
//   evt.preventDefault();
//   const id = Number(picture.dataset.id);
//   const picturesData = pictures.find((item) => item.id === id);
//   openBigPicture(picturesData);
// }

// function clearBigPhoto () {
//   pictureContainer.querySelector('a.picture').forEach((item) => item.remove());
// }

// export {renderBigPhoto};
// console.log('big-picture подключен')
