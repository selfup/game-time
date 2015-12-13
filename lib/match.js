'use strict'

const Game = require('./game')

$(document).ready( () => {
  keyboardMoves()
  startPlayers()
})

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')
let game = new Game

var drawOne = () => {
  context.fillStyle = "#FF0000"
  context.fillRect(game.bikeOne.x, game.bikeOne.y, game.bikeOne.width, game.bikeOne.height)
}

var drawTwo = () => {
  context.fillStyle = "#FFFF00"
  context.fillRect(game.bikeTwo.x, game.bikeTwo.y, game.bikeTwo.width, game.bikeTwo.height)
}

var startPlayers = () => {
  $('#start').on('click', function(event) {
    playerOneRight(); playerTwoLeft(); playerTwoLeft()
  })
}

function keyboardMoves () {
  $('body').on('keydown', function(event) {
    if (game.gameStatus !== "alive") {
      alert(game.gameStatus)
    } else {
      switch(event.which) {
          case 65:
          return playerOneLeft()

          case 87:
          return playerOneUp()

          case 68:
          return playerOneRight()

          case 83:
          return playerOneDown()

          case 74:
          return playerTwoLeft()

          case 73:
          return playerTwoUp()

          case 76:
          return playerTwoRight()

          case 75:
          return playerTwoDown()

          default: return
      }
      event.preventDefault()
    }
  })
}

var playerOneRight = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveRight;
    game.fillBikeTrailOne
  })
}

var playerOneDown = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveDown;
    game.fillBikeTrailOne
  })
}

var playerOneUp = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveUp;
    game.fillBikeTrailOne
  })
}

var playerOneLeft = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveLeft;
    game.fillBikeTrailOne
  })
}

var playerTwoRight = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveRight;
    game.fillBikeTrailTwo
  })
}

var playerTwoDown = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveDown;
    game.fillBikeTrailTwo
  })
}

var playerTwoUp = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveUp;
    game.fillBikeTrailTwo
  })
}

var playerTwoLeft = () => {
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
