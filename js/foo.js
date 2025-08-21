// function deleteFirstZero(arr) {
//   if (arr[0][0] == 0) {
//     arr[0] = arr[0].split('').pop();
//   }
//   if (arr[1][0] == 0) {
//     arr[1] = arr[1].split('').pop();
//   }
//   return arr;
// }

// function splitString(str) {
//   return str.split(':');
// }

// function doNumber(arr) {
//   arr[0] = +arr[0];
//   arr[1] = +arr[1];
//   return arr
// }

// function isRightTimeMetting(beginWorking, endWorking, beginMetting, durationMetting) {
//   beginWorking = splitString(beginWorking);
//   endWorking = splitString(endWorking);
//   beginMetting = splitString(beginMetting);

//   beginWorking = deleteFirstZero(beginWorking);
//   endWorking = deleteFirstZero(endWorking);
//   beginMetting = deleteFirstZero(beginMetting);

//   beginWorking = doNumber(beginWorking);
//   endWorking = doNumber(endWorking);
//   beginMetting = doNumber(beginMetting);

//   if (beginMetting[0] >= beginWorking[0] &&
//     beginMetting[0] <= endWorking[0]) {
//     if (beginMetting[0] == beginWorking[0]) {
//       if (!(beginMetting[1] >= beginWorking[1])) {
//         return false;
//       }
//     }
//     if (beginMetting[0] == endWorking[0]) {
//       if (!(beginMetting[1] < endWorking[1])) {
//         return false;
//       }
//     }
//   }
//   else {
//     return false;
//   }
//   let currentTimeMetting = beginMetting.slice();
//   for (let i = 1; i <= durationMetting; i++) {
//     currentTimeMetting[1]++
//     if (currentTimeMetting[1] == 60) {
//       currentTimeMetting[1] = 0;
//       currentTimeMetting[0]++;
//     }
//   }
//   if (currentTimeMetting[0] >= beginWorking[0] &&
//     currentTimeMetting[0] <= endWorking[0]) {
//     if (currentTimeMetting[0] == beginWorking[0]) {
//       if (!(currentTimeMetting[1] >= beginWorking[1])) {
//         return false;
//       }
//     }
//     if (currentTimeMetting[0] == endWorking[0]) {
//       if (!(currentTimeMetting[1] < endWorking[1])) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
// }
// let beginWorking = '08:10';
// let endWorking = '18:05';
// let beginMetting = '16:00';
// durationMetting = 100;
// console.log(isRightTimeMetting(beginWorking, endWorking, beginMetting, durationMetting));

// Сокращенный вариант функции
// function deleteFirstZero(arr) {
//   if (arr[0][0] == 0) {
//     arr[0] = arr[0].split('').pop();
//   }
//   if (arr[1][0] == 0) {
//     arr[1] = arr[1].split('').pop();
//   }
//   return arr;
// }

// function splitString(str) {
//   return str.split(':');
// }

// function doNumber(arr) {
//   arr[0] = +arr[0];
//   arr[1] = +arr[1];
//   return arr
// }

// function TripleFunction(value, foo1, foo2, foo3) {
//   value = foo1(value);
//   value = foo2(value);
//   value = foo3(value);
//   return value;
// }

// function checkTimeMetting(timeMetting, beginWorking, endWorking) {
//   if (timeMetting[0] >= beginWorking[0] &&
//     timeMetting[0] <= endWorking[0]) {
//     if (timeMetting[0] == beginWorking[0]) {
//       if (!(timeMetting[1] >= beginWorking[1])) {
//         return false;
//       }
//     }
//     if (timeMetting[0] == endWorking[0]) {
//       if (!(timeMetting[1] <= endWorking[1])) {
//         return false;
//       }
//     }
//     return true;
//   }
//   else {
//     return false
//   }
// }

// function isRightTimeMetting(beginWorking, endWorking, beginMetting, durationMetting) {
//   beginWorking = TripleFunction(beginWorking, splitString, deleteFirstZero, doNumber);
//   endWorking = TripleFunction(endWorking, splitString, deleteFirstZero, doNumber)
//   beginMetting = TripleFunction(beginMetting, splitString, deleteFirstZero, doNumber);
//   var1 = checkTimeMetting(beginMetting, beginWorking, endWorking);
//   if (var1) {
//     console.log('Начальные условия удовлетворяют');
//   }
//   else {
//     console.log('Начальные условия не удовлетворяют');
//     return false;
//   }
//   let currentTimeMetting = beginMetting.slice();
//   for (let i = 1; i <= durationMetting; i++) {
//     currentTimeMetting[1]++
//     if (currentTimeMetting[1] == 60) {
//       currentTimeMetting[1] = 0;
//       currentTimeMetting[0]++;
//     }
//   }
//   let var2 = checkTimeMetting(currentTimeMetting, beginWorking, endWorking);
//   return var2;
// }
// let beginWorking = '08:10';
// let endWorking = '18:05';
// let beginMetting = '16:05';
// durationMetting = 120;
// console.log(isRightTimeMetting(beginWorking, endWorking, beginMetting, durationMetting));

// export {isRightTimeMetting};

const mother = 'Natasha';
const father = 'Vladimir';
//
console.log('файл foo.js запущен');
export { mother, father };

