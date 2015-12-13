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
  $(document).on('keydown', function(event) {
    if (game.gameStatus !== "alive") {
      alert(game.gameStatus)
    } else {
      switch(event.which) {
          case 65:
          return playerOneMove(game.bikeOne.moveLeft)

          case 87:
          return playerOneMove(game.bikeOne.moveUp)

          case 68:
          return playerOneMove(game.bikeOne.moveRight)

          case 83:
          return playerOneMove(game.bikeOne.moveDown)

          case 74:
          return playerTwoMove(game.bikeTwo.moveLeft)

          case 73:
          return playerTwoMove(game.bikeTwo.moveUp)

          case 76:
          return playerTwoMove(game.bikeTwo.moveRight)

          case 75:
          return playerTwoMove(game.bikeTwo.moveDown)

          default: return
      }
      event.preventDefault()
    }
  })
}

var playerOneMove = (direction) => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); this.direction;
    game.fillBikeTrailOne
  })
}

var playerTwoMove = (direction) => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); this.direction;
    game.fillBikeTrailTwo
  })
}
// var resetGame = () => {
//   $('#reset').on('click', function(event) {
//     location.reload()
//   }
// })
