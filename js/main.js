// Первая функция
// let isStringLessMaxLength = (String, maxLength) => String.length <= maxLength;

// console.log(isStringLessMaxLength('ers', 3));

// Вторая функция

// let isPalindrom = function (String) {
//   let newString = "";
//   String = String.replaceAll(" ", "").toLowerCase();
//   for (let i = String.length - 1; i >= 0; i--) {
//     newString += String.at(i);
//     console.log(newString);
//   }
//   return newString === String
// }
// console.log(isPalindrom('Лёша на полке клопа нашёл '));
// isPalindrom("тот");
// Третья функция
// const takeNumberFromString = function (String) {
//   let newString = '';

//   String = String.toString().replaceAll(' ', '').toLowerCase();
//   let elementString;
//   for (let i = 0; i < String.length; i++) {
//     elementString = Number(String.at(i));
//     if (Number.isNaN(elementString)) {
//       continue;
//     }
//     else if (elementString === 0 && newString == 0) {
//       continue;
//     }
//     else {
//       newString += elementString;

//     }
//   }
//   newString = newString.toString();
//   if (newString == '') {
//     newString = NaN;

//   }
//   return newString
// }

// console.log(takeNumberFromString('1 кефир, 0.5 батона'));
