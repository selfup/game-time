'use strict'

const Game = require('./game')
const EventEmitter = require('events')
const NewEvent = new EventEmitter()
const $ = require('jquery')

$(document).ready( () => {
  resetGame(); trueKeys(); falseKeys(); startPlayers(); playGame(); logNames()
})

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')
let game = new Game
let currentKeys = {}
let start = "no tron"
let playerOneName = ""
let playerTwoName = ""


const drawOne = () => {
  context.fillStyle = "#FF0000"
  context.fillRect(game.bikeOne.x, game.bikeOne.y, game.bikeOne.width, game.bikeOne.height)
}

const drawTwo = () => {
  context.fillStyle = "#FFFF00"
  context.fillRect(game.bikeTwo.x, game.bikeTwo.y, game.bikeTwo.width, game.bikeTwo.height)
}

const playerOneMove = (direction) => {
  drawOne(); direction
  game.fillBikeTrailOne
}

const playerTwoMove = (direction) => {
  drawTwo(); direction
  game.fillBikeTrailTwo
}

const gameDirectionStatus = {
  65: () => { playerOneMove(game.bikeOne.moveLeft) },
  87: () => { playerOneMove(game.bikeOne.moveUp) },
  68: () => { playerOneMove(game.bikeOne.moveRight) },
  83: () => { playerOneMove(game.bikeOne.moveDown) },
  74: () => { playerTwoMove(game.bikeTwo.moveLeft) },
  73: () => { playerTwoMove(game.bikeTwo.moveUp) },
  76: () => { playerTwoMove(game.bikeTwo.moveRight) },
  75: () => { playerTwoMove(game.bikeTwo.moveDown) }
}

const executeTrueKeyFunctions = () => {
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

const trueKeys = () => {
 $('#start, #reset').on('keydown', (event) => {
  if (game.gameStatus !== "alive") {
    $(`<p>${game.gameStatus}</p>`).appendTo('#player_status')
   } else if (start === "le tron") {
     currentKeys[event.keyCode] = true;
     executeTrueKeyFunctions()
   }
   event.preventDefault()
 })
}

const falseKeys = () => {
 $('#start, #reset').on('keyup', (event) => {
     currentKeys[event.keyCode] = false;
     executeTrueKeyFunctions()
   event.preventDefault()
 })
}

const playGame = () => {
 if (start === "le tron") {
   executeTrueKeyFunctions()
 } else if (start === "no tron") {
   return
 }
}

const logNames = () => {
  let url = 'http://localhost:8080/'; let fullUrl = window.location.href
  let p1 = '?playerone='; let p2 = '&playertwo='
  $('#start').on('click', (event) => {
    playerOneName = fullUrl.split(p1).join("").split(p2)[0].replace(url, '')
    playerTwoName = fullUrl.split(p1).join("").split(p2)[1].replace(url, '')
    console.log(playerOneName)
    console.log(playerTwoName)
  })
}

const startPlayers = () => {
 $('#start').on('click', (event) => {
   start = "le tron"
 })
}

const resetGame = () => {
  $('#reset').on('click', (event) => {
    game = new Game
    context.clearRect(0, 0, canvas.width, canvas.height)
    $('#player_status').children().remove()
  })
}
