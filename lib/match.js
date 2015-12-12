'use strict'

const Game = require('./game')

$(document).ready( () => {

});

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');


function keyboardMoves () {
  $('body').on('keydown', function(event) {
    switch(event.which) {
        case 37: // left
        return this.game.bikeOne.moveLeft;

        case 38: // up
        return this.game.bikeOne.moveUp;

        case 39: // right
        return this.game.bikeOne.moveRight;

        case 40: // down
        return this.game.bikeOne.moveDown;

        default: return; // exit this handler for other keys
    }
    event.preventDefault(); // prevent the default action (scroll / move caret)
  });
}
