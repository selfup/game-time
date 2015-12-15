'use strict'

const Game = require('./game')
const EventEmitter = require('events')
const NewEvent = new EventEmitter()
const $ = require('jquery')

$(document).ready( () => {
  resetGame(); trueKeys(); falseKeys(); executeTrueKeyFunctions()
})

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')
let game = new Game
var currentKeys = {}

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

var gameDirectionStatus = {
  65: () => { playerOneMove(game.bikeOne.moveLeft) },
  87: () => { playerOneMove(game.bikeOne.moveUp) },
  68: () => { playerOneMove(game.bikeOne.moveRight) },
  83: () => { playerOneMove(game.bikeOne.moveDown) },
  74: () => { playerTwoMove(game.bikeTwo.moveLeft) },
  73: () => { playerTwoMove(game.bikeTwo.moveUp) },
  76: () => { playerTwoMove(game.bikeTwo.moveRight) },
  75: () => { playerTwoMove(game.bikeTwo.moveDown) }
}

var executeTrueKeyFunctions = () => {
  _.forEach(currentKeys, (n, key) => {
    if (n) {
      let gameDirection = gameDirectionStatus[key]
      if (gameDirection) {
        gameDirection()
      }
    } else if (n === false) {
      return
    }
  })
}

var trueKeys = () => {
  document.addEventListener('keydown', (event) => {
    if (game.gameStatus !== "alive") {
      alert(game.gameStatus)
    } else {
      currentKeys[event.keyCode] = true;
      executeTrueKeyFunctions()
    }
    event.preventDefault()
    })
  }

var falseKeys = () => {
  document.addEventListener('keyup', (event) => {
    if (game.gameStatus !== "alive") {
      alert(game.gameStatus)
    } else {
      currentKeys[event.keyCode] = false;
      executeTrueKeyFunctions()
    }
    event.preventDefault()
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
