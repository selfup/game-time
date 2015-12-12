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
  })
}

var rightOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveRight
  })
}

var downOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveDown
  })
}

var upOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveUp
  })
}

var leftOne = () => {
  requestAnimationFrame( function gameLoop() {
    drawOne(); game.bikeOne.moveLeft
  })
}

var rightTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveRight
  })
}

var downTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveDown
  })
}

var upTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveUp
  })
}

var leftTwo = () => {
  requestAnimationFrame( function gameLoop() {
    drawTwo(); game.bikeTwo.moveLeft
  })
}

// var resetGame = () => {
//   $('#reset').on('click', function(event) {
//     location.reload()
//   }
// })
