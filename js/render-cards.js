const picturesListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
const renderThumbnails = (photos) => {
  photos.forEach(({id, url, description, likes, comments}) => {
    picturesListElement.querySelectorAll('.picture').forEach((item) => item.remove());
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.pictureId = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.appendChild(pictureElement);
  });
  picturesListElement.appendChild(picturesFragment);
};

export { picturesListElement, renderThumbnails };

