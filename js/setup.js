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

var getRandomValue = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var generateArrayWizard = function (size, generator) {
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
  userDialog.classList.remove('hidden');

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


var wizard = generateArrayWizard(4, generateData);
renderCards(wizard);
