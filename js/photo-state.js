let photos = [];

const savePhotos = (newPhotos) => {
  photos = newPhotos;
};

const getPhotoById = (id) => photos.find((photo) => photo.id === Number(id));

export { savePhotos, getPhotoById };
