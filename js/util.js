const getRandomInteger = function (min, max) {
  let upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  let lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getUniqueInteger = (min, max) => { //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const uniqueInteger = [];
  return function () {
    let currentInteger = getRandomInteger(min, max);
    if (uniqueInteger.length >= (max - min + 1)) {
      return null;
    }
    while (uniqueInteger.includes(currentInteger)) {
      currentInteger = getRandomInteger(min, max);
    }
    uniqueInteger.push(currentInteger);
    return currentInteger;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

console.log('Файл util.js Работает');

const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];
const getUniqueArrayNumber = (number) => getUniqueInteger(number[0], number.at(-1)); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const getRandomArrayNumber = (number) => getRandomInteger(number[0], number.at(-1));

const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorLoadDataTemplate = document.querySelector('#data-error').content;
const body = document.body;

const showErrorMessage = (message) => {
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  if (message) {
    errorArea.querySelector('.data-error__title').textContent = message;
  }
  body.append(errorArea);

  const errorLoadDataArea = body.querySelector('.data-error');

  setTimeout(()=> {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}
export {getRandomArrayElement, getUniqueArrayNumber, getRandomArrayNumber, isEscapeKey, showErrorMessage, debounce};
