'use strict'

const Game = require('./game')
const EventEmitter = require('events')
const NewEvent = new EventEmitter()
const $ = require('jquery')

$(document).ready( () => {
  resetGame(); trueKeys(); falseKeys(); startPlayers(); playGame(); logNames(); nextLevel()
})

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')
let game = new Game
let currentKeys = {}
let start = "no tron"
let playerOneName = ""
let playerOneScore = 0
let playerTwoName = ""
let playerTwoScore = 0
let level = 1
let levelUp = false
let surrenderCount = 0

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
     levelUp = false
     updatePlayersAndScores()
     $(`<p>${game.gameStatus}</p>`).appendTo('#player_status')
    } else if (start === "le tron") {
      levelUp = true
      currentKeys[event.keyCode] = true;
      executeTrueKeyFunctions()
      updatePlayersAndScores()
    }
    event.preventDefault()
  })
  setTimeout(nextLevel, 10000)
}

const falseKeys = () => {
  $('#start, #reset').on('keyup', (event) => {
    currentKeys[event.keyCode] = false;
    setTimeout(surrender, 500);
    event.preventDefault()
  })
}

const updatePlayersAndScores = () => {
  updateRealScores()
  $('#playerOne').replaceWith(`<div id="playerOne" style="float: left; width: 170px;">${playerOneName}</div>`)
  $('#playerOneScore').replaceWith(`${playerOneScore}`)
  $('#playerTwo').replaceWith(`<div id="playerTwo" style="float: left; width: 170px;">${playerTwoName}</div>`)
  $('#playerTwoScore').replaceWith(`${playerTwoScore}`)
}

const updateRealScores = () => {
  if (game.gameStatus === "Player One Wins!") {
    playerOneScore += 1
  } else if (game.gameStatus === "Player Two Wins!") {
    playerTwoScore += 1
  }
}

const playGame = () => {
  if (start === "le tron") {
    executeTrueKeyFunctions()
  } else if (start === "no tron") {
    return
  }
}

const logNames = () => {
  let rootUrl = 'http://localhost:8080/'; let fullUrl = window.location.href
  let p1 = '?playerone='; let p2 = '&playertwo='
  $('#start').on('click', (event) => {
    playerOneName = fullUrl.split(p1).join("").split(p2)[0].replace(rootUrl, '')
    playerTwoName = fullUrl.split(p1).join("").split(p2)[1].replace(rootUrl, '')
  })
}

const startPlayers = () => {
  $('#start').on('click', (event) => {
    start = "le tron"
  })
}

const nextLevel = () => {
  if(levelUp === true) {
    console.log(level)
    level += 0.5
    setTimeout(nextLevel, 10000)
  } else if (levelUp === false) {
    return
  }
}

// const surrender = () => {
//   surrenderCount += 1
//   if(surrenderCount === 50) {
//     console.log(surrenderCount)
//     $(`<p>GAME OVER - SOMEONE SURRENDERED</p>`).appendTo('#player_status')
//   }
//   console.log(surrenderCount)
//   setTimeout(surrender, 500)
// }

const resetGame = () => {
  $('#reset').on('click', (event) => {
    game = new Game
    context.clearRect(0, 0, canvas.width, canvas.height)
    $('#player_status').children().remove()
  })
}
