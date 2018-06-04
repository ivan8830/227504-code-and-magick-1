'use strict';
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 50;
var FONT_GAP = 10;
var TEXT_WIDTH = 25;
var BAR_WIDTH = 40;
var barHeight = -150;

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  } 
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.beginPath();
  ctx.moveTo(110, 145);
  ctx.bezierCurveTo(110, 145, 110, 115, 135, 105);
  ctx.bezierCurveTo(135, 105, 135, 15, 175, 65);
  ctx.bezierCurveTo(175, 65, 197, 25, 310, 25);
  ctx.bezierCurveTo(310, 25, 385, 25, 460, 65);
  ctx.bezierCurveTo(460, 65, 485, 35, 510, 105);
  ctx.bezierCurveTo(510, 105, 540, 135, 520, 290);
  ctx.lineTo(120, 290);
  ctx.bezierCurveTo(120, 290, 115, 215, 110, 145);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(100, 135);
  ctx.bezierCurveTo(100, 135, 100, 105, 125, 95);
  ctx.bezierCurveTo(125, 95, 125, 5, 165, 55);
  ctx.bezierCurveTo(165, 55, 187, 15, 300, 15);
  ctx.bezierCurveTo(300, 15, 375, 15, 450, 55);
  ctx.bezierCurveTo(450, 55, 475, 25, 500, 95);
  ctx.bezierCurveTo(500, 95, 530, 125, 510, 280);
  ctx.lineTo(110, 280);
  ctx.bezierCurveTo(110, 280, 105, 205, 100, 135);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили', 215, 40);
  ctx.fillText('Список результатов:', 215, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    names[i] === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - TEXT_WIDTH, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - ((barHeight * times[i] * -1) / maxTime) - FONT_GAP - TEXT_WIDTH);
  }
};
