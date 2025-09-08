import { isEscapeKey } from "./util";

const body = document.body;

export const closeNotification = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if(evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)){
    existElement.remove();
    body.removeEventListener('click', closeNotification);
    body.removeEventListener('keydown', closeNotification);
  }
};

export const appendNotification = (template, trigger = null) => {
  trigger?.();
  const notificationNode = template.cloneNode(true);
  body.append(notificationNode);
  body.addEventListener('click', closeNotification);
  body.addEventListener('keydown', closeNotification);
};
console.log('notification.js работает');
