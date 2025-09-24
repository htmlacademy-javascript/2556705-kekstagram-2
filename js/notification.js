import { isEscapeKey } from './util';

const body = document.body;

function closeNotification (event) {
  event.stopPropagation();
  const popupElement = document.querySelector('.success') || document.querySelector('.error');

  popupElement.remove();
  body.removeEventListener('click', onClickCloseNotification);
  body.removeEventListener('keydown', onKeydownCloseNotification);
}

export function onClickCloseNotification (evt) {
  const popupElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = popupElement.querySelector('button');

  if (evt.target === popupElement || evt.target === closeButton) {
    closeNotification(evt);
  }
}

export function onKeydownCloseNotification (evt) {
  if (isEscapeKey(evt)) {
    closeNotification(evt);
  }
}

export const appendNotification = (template, trigger = null) => {
  trigger?.();
  const notificationNode = template.cloneNode(true);
  body.append(notificationNode);
  body.addEventListener('click', onClickCloseNotification);
  body.addEventListener('keydown', onKeydownCloseNotification);
};


