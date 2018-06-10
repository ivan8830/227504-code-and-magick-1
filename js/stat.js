'use strict';
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 50;
var FONT_GAP = 10;
var TEXT_WIDTH = 25;
var BAR_WIDTH = 40;
var barHeight = -150;

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var renderCloud = function (ctx, color, gap) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(100 + gap, 135 + gap);
  ctx.bezierCurveTo(100 + gap, 135 + gap, 100 + gap, 105 + gap, 125 + gap, 95 + gap);
  ctx.bezierCurveTo(125 + gap, 95 + gap, 125 + gap, 5 + gap, 165 + gap, 55 + gap);
  ctx.bezierCurveTo(165 + gap, 55 + gap, 187 + gap, 15 + gap, 300 + gap, 15 + gap);
  ctx.bezierCurveTo(300 + gap, 15 + gap, 375 + gap, 15 + gap, 450 + gap, 55 + gap);
  ctx.bezierCurveTo(450 + gap, 55 + gap, 475 + gap, 25 + gap, 500 + gap, 95 + gap);
  ctx.bezierCurveTo(500 + gap, 95 + gap, 530 + gap, 125 + gap, 510 + gap, 280 + gap);
  ctx.lineTo(110 + gap, 280 + gap);
  ctx.bezierCurveTo(110 + gap, 280 + gap, 105 + gap, 205 + gap, 100 + gap, 135 + gap);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 'rgba(0, 0, 0, 0.3)', 10);
  renderCloud(ctx, '#fff', 0);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили', 215, 40);
  ctx.fillText('Список результатов:', 215, 60);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - TEXT_WIDTH, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - ((barHeight * times[i] * -1) / maxTime) - FONT_GAP - TEXT_WIDTH);
  }
};
