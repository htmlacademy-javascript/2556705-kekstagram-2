const imgUploadWrapper = document.querySelector('.img-upload__wrapper');
const slider = imgUploadWrapper.querySelector('.effect-level__slider');
const effectLevel = imgUploadWrapper.querySelector('.img-upload__effect-level');
const effectLevelValue = imgUploadWrapper.querySelector('.effect-level__value');
const img = imgUploadWrapper.querySelector('.img-upload__preview');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
});

effectLevel.classList.add('hidden');

const onEffectChange = (evt) => {
  console.log(evt);
  const effect = evt.target.value;
  if(effect === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }

  switch (effect) {
    case 'none':
      img.style.filter = 'none';
      break;
    case 'chrome':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `grayscale(${effectLevelValue.value})`;
      });
      break;
    case 'sepia':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 0,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `sepia(${effectLevelValue.value})`;
      });
      break;
    case 'marvin':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 0,
        step: 1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `invert(${effectLevelValue.value}%)`;
      });
      break;
    case 'phobos':
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 0,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `blur(${effectLevelValue.value}px)`;
      });
      break;
    case 'heat':
      slider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 1,
        step: 0.1,
      });
      slider.noUiSlider.on('update', () => {
        img.style.filter = `brightness(${effectLevelValue.value})`;
      });
  }
};
console.log('Файл effects-slider.js Работает');
export {onEffectChange};































// import {uploadForm, imgPrewiew} from './element.js';
// import {getEffectsSelector} from './util.js';
// import {Effects, EFFECT_LEVEL_MAX, StyleFilterByEffects} from './data.js';

// const effectLevelInput = uploadForm.querySelector('.effect-level__value');
// effectLevelInput.value = EFFECT_LEVEL_MAX;
// const effectSlider = uploadForm.querySelector('.effect-level__slider');
// const sliderContainer = uploadForm.querySelector('.img-upload__effect-level');
// const selectorImg = imgPrewiew.classList;

// const effectRadioBtns = uploadForm.querySelectorAll('.effects__radio'); - через него организовать forEach

// const getUpdateSliderOptions = (effect, sliderElement) => sliderElement.noUiSlider.updateOptions(Effects[effect]);

// const resetFilter = () => {
//   imgPrewiew.style.removeProperty('filter');
//   sliderContainer.classList.add('hidden');
//   imgPrewiew.classList.replace(selectorImg, 'effects__prewiew--none');
// };

// const onEffectRadioBtnClick = (evt) => {
//   const currentRadioBtn = evt.target.closest('.effects__radio');
//   if(currentRadioBtn) {
//     const effectBtnValue = currentRadioBtn.value;
//     imgPrewiew.classList.replace(selectorImg, getEffectsSelector(effectBtnValue));
//     getUpdateSliderOptions(effectBtnValue, effectSlider);
//   }
// };

// noUiSlider.create(effectSlider, {
//   range: {
//     min: 0,
//     max: 100,
//   },
//   start: 100,
//   step: 1,
//   connect: 'lower'
// });

// effectSlider.noUiSlider.on('update', () => {
//   effectLevelInput.value = effectSlider.noUiSlider.get();
//   effectRadioBtns.forEach((item) => {
//     if(item.checked) {
//       if(item.value !== 'none') {
//         sliderContainer.classList.remove('hidden');
//         imgPrewiew.style.filter = StyleFilterByEffects[item.value](effectLevelInput.value);
//       } else {
//         resetFilter();
//       }
//     }
//   });
// });

// export {onEffectRadioBtnClick, resetFilter};
