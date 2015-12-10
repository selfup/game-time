const chai = require('chai')
const assert = chai.assert
const Game = require('../lib/game')
const TronBike = require('../lib/tron-bike')
const Grid = require('../lib/grid')

describe('if the game works', function () {

  it('the game is intantiated properly', function () {
    let game = new Game
    assert.isObject(game)
  })

  it('the firstBikeTrail is intantiated properly', function () {
    let game = new Game
    assert.deepEqual(game.grid.firstBikeTrail, [0, 300])
  })

  it('the secondBikeTrail is intantiated properly', function () {
    let game = new Game
    assert.deepEqual(game.grid.secondBikeTrail, [900, 300])
  })

  it('the combinedTrails is intantiated properly', function () {
    let game = new Game
    assert.deepEqual(game.grid.combinedTrails, [ 0, 300, 900, 300 ])
  })

  it('can add to combinedTrails on move', function () {
    let game = new Game
    game.bikeOne.moveRight
    game.bikeTwo.moveLeft
    game.fillBikeTrailOne
    game.fillBikeTrailTwo
    assert.deepEqual(game.grid.combinedTrails, [ 0, 300, 1, 300, 900, 300, 899, 300 ])
  })

  it('can declare a player has hit a trail and the game is over', function () {
    let game = new Game
    assert.deepEqual(game.statusArray, ["bikeOne alive", "bikeTwo alive"])
  })

  it('can declare a player is not dead after a move on start', function () {
    let game = new Game
    game.bikeOne.moveRight
    game.bikeTwo.moveLeft
    game.fillBikeTrailOne
    game.fillBikeTrailTwo
    assert.deepEqual(game.statusArray, ["bikeOne alive", "bikeTwo alive", "bikeOne alive", "bikeTwo alive"])
  })

  it('can declare a player is dead after a move into a trail', function () {
    let game = new Game
    game.statusArray.push("bikeTwo dead", "bikeOne alive")
    assert.strictEqual(game.gameStatus, "Player One Wins!")
  })

  it('can declare that when both players hit each other its a double kill', function () {
    let game = new Game
    game.statusArray.push("bikeOne dead", "bikeTwo dead")
    assert.strictEqual(game.gameStatus, "DOUBLE KILL!")
  })

})
