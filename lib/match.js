'use strict'

const Game = require('./game')
const EventEmitter = require('events')
const NewEvent = new EventEmitter()
const $ = require('jquery')
const _ = require('lodash')

$(document).ready( () => {
  resetGame(); trueKeys(); falseKeys(); startPlayers(); 
  playGame(); logNames(); nextLevel(); updateRealScores()
})

const game = new Game

const matchAttr = {
  canvas: document.getElementById('game'),
  context: canvas.getContext('2d'),
  currentKeys: {},
  start: "no tron",
  playerOneName: "Player One",
  playerOneScore: 0,
  playerTwoName: "Player Two",
  playerTwoScore: 0,
  level: 0,
  levelUp: false
}

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
  _.forEach(matchAttr.currentKeys, (n, key) => {
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
      cleanUp()
    } else if (matchAttr.start === "le tron") {
      continueGame()
    }
    event.preventDefault()
  })
  setTimeout(matchAttr.nextLevel, 10000)
}

const falseKeys = () => {
  $('#start, #reset').on('keyup', (event) => {
    currentKeys[event.keyCode] = false
    executeTrueKeyFunctions()
    event.preventDefault()
  })
}

const cleanUp = () => {
  $(`<p>${game.gameStatus}</p>`).appendTo('#player_status')
  updatePlayersAndScores()
  matchAttr.levelUp = false
  matchAttr.start = "no tron"
}

const continueGame = () => {
  matchAttr.levelUp = true
  currentKeys[event.keyCode] = true
  updatePlayersAndScores()
  executeTrueKeyFunctions()
}

const updatePlayersAndScores = () => {
  updateRealScores()
  removeAndUpdateScores()
  updateLevel()
}

const removeAndUpdateScores = () => {
  $('#playerOne').empty()
  $('#playerOne').append(`<div id="playerOne" style="float: left; width: 170px;">${matchAttr.playerOneName}</div>`)
  $('#playerOneScore').empty()
  $('#playerOneScore').append(`${matchAttr.playerOneScore}`)
  $('#playerTwo').empty()
  $('#playerTwo').append(`<div id="playerTwo" style="float: left; width: 170px;">${matchAttr.playerTwoName}</div>`)
  $('#playerTwoScore').empty()
  $('#playerTwoScore').append(`${matchAttr.playerTwoScore}`)
}

const updateLevel = () => {
  $('#current-level').empty()
  $('#current-level').append(`<div id="current-level">Current Level: ${matchAttr.level}</div>`)
}

const updateRealScores = () => {
  if (matchAttr.start === "le tron") {
    updateIndividualScores()
  }
}

const updateIndividualScores = () => {
  if (game.gameStatus === "Player One Wins!") {
    matchAttr.playerOneScore += 1
  } else if (game.gameStatus === "Player Two Wins!") {
    matchAttr.playerTwoScore += 1
  }
}

const playGame = () => {
  if (matchAttr.start === "le tron") {
    executeTrueKeyFunctions()
  } else if (matchAttr.start === "no tron") {
    return
  }
}

const logNames = () => {
  let rootUrl = 'http://localhost:8080/'; let fullUrl = window.location.href
  let p1 = '?playerone='; let p2 = '&playertwo='
  $('#start').on('click', (event) => {
    matchAttr.playerOneName = fullUrl.split(p1).join("").split(p2)[0].replace(rootUrl, '')
    matchAttr.playerTwoName = fullUrl.split(p1).join("").split(p2)[1].replace(rootUrl, '')
    updatePlayersAndScores()
  })
}

const startPlayers = () => {
  $('#start').on('click', (event) => {
    matchAttr.start = "le tron"
  })
}

const nextLevel = () => {
  if(levelUp === true) {
    matchAttr.level += 1
    updateLevel()
    setTimeout(nextLevel, 10000)
  } else if (levelUp === false) {
    return
  }
}

const resetHelper = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)
  $('#player_status').children().remove()
  matchAttr.start = "le tron"; updatePlayersAndScores()
}

const resetGame = () => {
  $('#reset').on('click', (event) => {
    matchAttr.level = 0; game = new Game
    resetHelper()
  })
}
