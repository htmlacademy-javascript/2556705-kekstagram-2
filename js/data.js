import {getRandomArrayElement, getUniqueArrayNumber, getRandomArrayNumber} from './util.js';
/*
const Effects = {
  none: sliderOptionsObject
}
*/
const PHOTOS_NUMBER = 25;
const ID = [1, 2500];
const URL = [1, 25];
const LIKES = [15, 200];
const COMMENTS_ID = [1, 1000];
const COMMENTS = [0, 30];
const AVATAR = [1, 6];
const DESCRIPTION = ['Фото на море', 'Фото на пляже', 'Фото за 2020 год', 'Фото за 2021 год', 'Фото на даче'];
const COMMENTS_MESSAGE = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'.split('.');
const NUMBERS_MESSAGES = [1, 2];
const NAMES = ['Александр', 'Анастасия', 'Максим', 'Мария', 'Иван', 'Дарья', 'Артём', 'Анна', 'Никита', 'Елизавета', 'Дмитрий'];

const createMessage = () => getRandomArrayElement(COMMENTS_MESSAGE);

const createComment = () => ({
  id: getUniqueArrayNumber(COMMENTS_ID)(),
  avatar: `img/avatar-${getRandomArrayNumber(AVATAR)}.svg`,
  message: Array.from({ length: getRandomArrayNumber(NUMBERS_MESSAGES) }, createMessage),
  name: getRandomArrayElement(NAMES),
});

const crearePhoto = () => ({
  id: getUniqueArrayNumber(ID)(),
  url: `photos/${getUniqueArrayNumber(URL)()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomArrayNumber(LIKES),
  comments: Array.from({ length: getRandomArrayNumber(COMMENTS) }, createComment)
});

console.log('Файл data.js Работает');
const createPhotos = () => Array.from({ length: PHOTOS_NUMBER }, crearePhoto);
const photos = createPhotos();
console.log(createPhotos());
export {photos};

