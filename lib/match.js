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

///////////////////////  Right player

        case 74: // left
        return leftTwo()

        case 73: // up
        return upTwo()

        case 76: // right
        return rightTwo()

        case 75 : // down
        return downTwo()

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

var drawTwo = function () {
  context.fillStyle = game.drawBikeTwo
  context.fillRect(game.bikeTwo.x, game.bikeTwo.y, game.bikeTwo.width, game.bikeTwo.height);
  return this;
};

var rightOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne()
    game.bikeOne.moveRight;
    console.log("right");
  });
};

var downOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne()
    game.bikeOne.moveDown;
    console.log("down");
  });
};

var upOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne()
    game.bikeOne.moveUp;
    console.log("up");
  });
};

var leftOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne()
    game.bikeOne.moveLeft;
    console.log("left");
  });
};

///////////////////////////BikeTwo

var rightTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo()
    game.bikeTwo.moveRight;
    console.log("right");
  });
};

var downTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo()
    game.bikeTwo.moveDown;
    console.log("down");
  });
};

var upTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo()
    game.bikeTwo.moveUp;
    console.log("up");
  });
};

var leftTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo()
    game.bikeTwo.moveLeft;
    console.log("left");
  });
};

var startLeftPlayer = () => {
  $('#start').on('click', function(event) {
    rightOne();
  });
};

var startRightPlayer = () => {
  $('#start').on('click', function(event) {
    rightTwo();
  });
};
