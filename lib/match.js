'use strict'

const Game = require('./game')

$(document).ready( () => {
  keyboardMoves();
  startLeftPlayer();
});

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game

function keyboardMoves () {
  $('body').on('keydown', function(event) {
    switch(event.which) {
        case 65: // left
        return leftOne()

        case 87: // up
        return upOne()

        case 68: // right
        return rightOne()

        case 83: // down
        return downOne()

        default: return; // exit this handler for other keys
    }
    event.preventDefault(); // prevent the default action (scroll / move caret)
  });
}

var drawOne = function () {
  context.fillStyle = game.drawBikeOne
  context.fillRect(game.bikeOne.x, game.bikeOne.y, game.bikeOne.width, game.bikeOne.height);
  return this;
};

var rightOne = () => {
  requestAnimationFrame( function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawOne()
    game.bikeOne.moveRight;
    console.log("right");
  });
};

var downOne = () => {
  requestAnimationFrame( function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawOne()
    game.bikeOne.moveDown;
    console.log("down");
  });
};

var upOne = () => {
  requestAnimationFrame( function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawOne()
    game.bikeOne.moveUp;
    console.log("up");
  });
};

var leftOne = () => {
  requestAnimationFrame( function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawOne()
    game.bikeOne.moveLeft;
    console.log("left");
  });
};

var startLeftPlayer = () => {
  $('#start').on('click', function(event) {
    rightOne();
  });
};
