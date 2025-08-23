import {photos} from './data.js';
import {clearComments, renderComments} from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
// const socialComments = bigPicture.querySelector('.social__comments');
// const socialCommentTemplate = socialComments.querySelector('.social__comment');
const commentsCaption = bigPicture.querySelector('.social__caption');
// const commentsCount = bigPicture.querySelector('.social__comment-count');
// const commentsLoader = bigPicture.querySelector('.social__comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const onBigPictureCancelClick = () => {
  closeBigPicture();
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const closeBigPicture = () => {
  clearComments();

  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeydown);
};

const openBigPicture = (pictureId) => {
  const currentPhoto = photos.find((photo) => photo.id === Number(pictureId));
  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  commentsCaption.textContent = currentPhoto.description;
  renderComments(currentPhoto.comments);
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.addEventListener('keydown', onEscKeydown);
};

console.log('render-photo Подключен');
export {openBigPicture};
