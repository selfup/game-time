'use strict'

const Game = require('./game')
const EventEmitter = require('events')
const NewEvent = new EventEmitter()
const $ = require('jquery')

$(document).ready( () => {
  keyboardMoves(); resetGame()
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

var playerOneMove = (direction) => {
  drawOne(); direction
  game.fillBikeTrailOne
}

var playerTwoMove = (direction) => {
  drawTwo(); direction
  game.fillBikeTrailTwo
}

var keyboardMoves = () => {
  document.addEventListener('keydown', (event) => {
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

          default: NewEvent
      }
      event.preventDefault()
    }
  })
}

var startPlayers = () => {
  $('#start').on('click', (event) => {
    playerOneMove(game.bikeOne.moveRight); playerTwoMove(game.bikeTwo.moveLeft)
  })
}

var resetGame = () => {
  $('#reset').on('click', (event) => {
    game.bikeOne.x = 0; game.bikeOne.y = 150
    game.bikeTwo.x = 450; game.bikeTwo.y = 150
    game.grid.firstBikeTrail = [[0, 150]]; game.grid.secondBikeTrail = [[450, 150]]
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawOne(); drawTwo()
  })
}
