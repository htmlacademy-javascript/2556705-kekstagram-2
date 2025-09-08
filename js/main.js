import {savePhotos} from './photo-state.js';
import './img-upload-form.js';
import './render-photo.js';
// import { photos } from './data.js';
import { getData, sendData } from './api.js';
import {renderThumbnails} from './render-cards.js';
import { showErrorMessage } from './util.js';
import { configFilter } from './filter.js';
console.log('Файл main.js Работает');

const bootstrap = async () => {
  try {
    const photos = await getData();
    savePhotos(photos);
    renderThumbnails(photos);
    configFilter(photos);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

bootstrap();

