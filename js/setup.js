'use strict';

var nameWizard = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var surnameWizard = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomValue = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var generateArray = function (size, generator) {
  var cards = [];

  for (var i = 0; i < size; i++) {
    cards.push(generator(i));
  }

  return cards;
};

var generateData = function () {
  return {
    name: nameWizard[getRandomValue(nameWizard)] + ' ' + surnameWizard[getRandomValue(surnameWizard)],
    coatColor: coatColor[getRandomValue(coatColor)],
    eyesColor: eyesColor[getRandomValue(eyesColor)]
  };
};

var renderCards = function (arr) {
  var userDialog = document.querySelector('.setup');

  var similarWizardList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = arr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;

    fragment.appendChild(wizardElement);
  }

  similarWizardList.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  return similarWizardList;
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardAppearanse = document.querySelector('.setup-wizard-appearance');
var wizardCoatInput = wizardAppearanse.querySelector('input[name="coat-color"');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardEyesInput = wizardAppearanse.querySelector('input[name="eyes-color"');
var fireBallSetupWrap = document.querySelector('.setup-fireball-wrap');
var setupFireball = fireBallSetupWrap.querySelector('.setup-fireball');
var fireballInput = fireBallSetupWrap.querySelector('input');

wizardCoat.addEventListener('click', function () {
  var randomCoat = coatColor[getRandomValue(coatColor)];
  wizardCoat.style.fill = randomCoat;
  wizardCoatInput.value = randomCoat;
});

wizardEyes.addEventListener('click', function () {
  var randomEyes = eyesColor[getRandomValue(coatColor)];
  wizardEyes.style.fill = randomEyes;
  wizardEyesInput.value = randomEyes;
});

fireBallSetupWrap.addEventListener('click', function () {
  var randomFireball = fireballColor[getRandomValue(fireballColor)];
  setupFireball.style.fill = randomFireball;
  fireballInput.value = randomFireball;
});

var wizard = generateArray(4, generateData);
renderCards(wizard);
