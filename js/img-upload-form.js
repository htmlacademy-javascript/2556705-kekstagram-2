import { isEscapeKey, showErrorMessage } from './util.js';
import { onEffectChange } from './effects-slider.js';
import { error, isHashtagsValid } from './check-hashtag-validity.js';
import { sendData } from './api.js';
import { appendNotification } from './notification.js';

const FILE_TYPES = ['.jpg', '.jpeg', '.png', '.gif', '.jfif'];
const SCALE_STEP = 0.25;

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

let scale = 1;

const imgUploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const uploadFileInputElement = document.querySelector('.img-upload input[type=file]');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const smaller = imgUploadForm.querySelector('.scale__control--smaller');
const bigger = imgUploadForm.querySelector('.scale__control--bigger');
const img = imgUploadForm.querySelector('.img-upload__preview img');
const imgSlider = imgUploadForm.querySelector('.img-upload__preview');
const scaleControl = imgUploadForm.querySelector('.scale__control--value');
const effectLevel = imgUploadForm.querySelector('.img-upload__effect-level');
const effectsList = imgUploadForm.querySelector('.effects__list');
const inputHashtag = imgUploadForm.querySelector('.text__hashtags');
const formSubmitButton = imgUploadForm.querySelector('.img-upload__submit');
const templateSuccess = document.querySelector('#success').content;
const templateError = document.querySelector('#error').content;

const disabledButton = (text) => {
  formSubmitButton.disabled = true;
  formSubmitButton.textContent = text;
};

const enabledButton = (text) => {
  formSubmitButton.disabled = false;
  formSubmitButton.textContent = text;
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const onImgUploadClose = () => {
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  scale = 1;
  img.style.transform = `scale(${scale})`;
  effectLevel.classList.add('hidden');
  imgSlider.style.filter = 'none';
  imgUploadForm.reset();
  document.removeEventListener('keydown', onEscapeKeydown);
};

function onEscapeKeydown (evt) {
  if(isEscapeKey(evt) && !evt.target.classList.contains('.text__hashtags') && !evt.target.classList.contains('.text__description')) {
    evt.preventDefault();
    onImgUploadClose();
  }
}

const onPhotoSelect = () => {
  document.body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  imgUploadCancel.addEventListener('click', onImgUploadClose);
  document.addEventListener('keydown', onEscapeKeydown);
};

const onSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    img.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onBiggerClick = () => {
  if (scale < 1) {
    scale += SCALE_STEP;
    img.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const onHashtagInput = () => isHashtagsValid(inputHashtag.value);

const sendFormData = async (formElement) => {
  const valid = pristine.validate();
  if (valid) {
    inputHashtag.value = inputHashtag.value.trim().replaceAll(/\s+/g, ' ');
    disabledButton(SubmitButtonText.SENDING);
    try {
      await sendData(new FormData(formElement));
      appendNotification(templateSuccess, () => onImgUploadClose());
    } catch (err) {
      appendNotification(templateError);
    } finally {
      enabledButton(SubmitButtonText.IDLE);
    }
  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  sendFormData(evt.target);
};

function onFileInputChange (evt) {
  evt.preventDefault();
  const file = uploadFileInputElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    const url = URL.createObjectURL(file);
    img.src = url;
  } else {
    document.body.classList.remove('modal-open');
    uploadOverlay.classList.add('hidden');
    showErrorMessage();
  }
}

pristine.addValidator(inputHashtag, isHashtagsValid, error, 2, false);
uploadFile.addEventListener('change', onPhotoSelect);
smaller.addEventListener('click', onSmallerClick);
bigger.addEventListener('click', onBiggerClick);
effectsList.addEventListener('change', onEffectChange);
inputHashtag.addEventListener('input', onHashtagInput);
imgUploadForm.addEventListener('submit', formSubmitHandler);
uploadFileInputElement.addEventListener('change', onFileInputChange);
