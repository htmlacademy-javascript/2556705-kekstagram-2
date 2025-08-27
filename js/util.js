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

export {getRandomArrayElement, getUniqueArrayNumber, getRandomArrayNumber, isEscapeKey};
