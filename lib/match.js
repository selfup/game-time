'use strict'

const Game = require('./game')

$(document).ready( () => {
  keyboardMoves()
  startPlayers()
})

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')
let game = new Game

var drawOne = function () {
  context.fillStyle = "#FF0000"
  context.fillRect(game.bikeOne.x, game.bikeOne.y, game.bikeOne.width, game.bikeOne.height)
  return this
}

var drawTwo = function () {
  context.fillStyle = "#FFFF00"
  context.fillRect(game.bikeTwo.x, game.bikeTwo.y, game.bikeTwo.width, game.bikeTwo.height)
  return this
}

var startPlayers = () => {
  $('#start').on('click', function(event) {
    rightOne(); leftTwo(); leftTwo()
  })
}

function keyboardMoves () {
  $('body').on('keydown', function(event) {
    if (game.gameStatus !== "alive") {
      alert(game.gameStatus)
    } else {
      switch(event.which) {
          case 65:
          return leftOne()

          case 87:
          return upOne()

          case 68:
          return rightOne()

          case 83:
          return downOne()

          case 74:
          return leftTwo()

          case 73:
          return upTwo()

          case 76:
          return rightTwo()

          case 75:
          return downTwo()

          default: return
      }
      event.preventDefault()
    }
  })
}

var rightOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveRight;
    game.fillBikeTrailOne
  })
}

var downOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveDown;
    game.fillBikeTrailOne
  })
}

var upOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveUp;
    game.fillBikeTrailOne
  })
}

var leftOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveLeft;
    game.fillBikeTrailOne
  })
}

var rightTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveRight;
    game.fillBikeTrailTwo
  })
}

var downTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveDown;
    game.fillBikeTrailTwo
  })
}

var upTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveUp;
    game.fillBikeTrailTwo
  })
}

var leftTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveLeft;
    game.fillBikeTrailTwo
  })
}

// var resetGame = () => {
//   $('#reset').on('click', function(event) {
//     location.reload()
//   }
// })
