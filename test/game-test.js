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
    assert.deepEqual(game.grid.firstBikeTrail, [[ 0, 150 ]])
  })

  it('the secondBikeTrail is intantiated properly', function () {
    let game = new Game
    assert.deepEqual(game.grid.secondBikeTrail, [[450, 150]])
  })

  it('the combinedTrails is intantiated properly', function () {
    let game = new Game
    assert.deepEqual(game.grid.combinedTrails, [[ 0, 150] , [450, 150]])
  })

  it('can add to combinedTrails on move', function () {
    let game = new Game
    game.bikeOne.moveRight
    game.fillBikeTrailOne
    game.bikeTwo.moveLeft
    game.fillBikeTrailTwo
    assert.deepEqual(game.grid.combinedTrails, [ [ 0, 150 ], [ 1, 150 ], [ 450, 150 ], [ 449, 150 ] ])
  })

  it('can declare a player is not dead after a move on start', function () {
    let game = new Game
    game.bikeOne.moveRight
    game.bikeTwo.moveLeft
    game.fillBikeTrailOne
    game.fillBikeTrailTwo
    assert.deepEqual(game.grid.firstBikeTrail, [ [ 0, 150 ], [ 1, 150 ] ])
  })

   it('declares that both bikes are dead when they colide', function () {
    let game = new Game
    for (let i = 0; i < 451; i++) {
      game.bikeOne.moveRight
      game.bikeTwo.moveLeft
      game.fillBikeTrailOne
      game.fillBikeTrailTwo
    }
    assert.strictEqual(game.gameStatus, "DOUBLE KILL!")
  })

  it('declares that a bike is not dead when it moves right a bunch but does not hit a trail', function () {
    let game = new Game
    for (let i = 1; i < 45; i++) {
      game.bikeOne.moveRight
      game.fillBikeTrailOne
      game.bikeTwo.moveLeft
      game.fillBikeTrailTwo
    }
    assert.notStrictEqual(game.gameStatus, "DOUBLE KILL!")
  })

  it('is not dead when it moves up and does not hit a trail', function () {
    let game = new Game
    for (let i = 1; i < 2; i++) {
      game.bikeOne.moveUp
      game.fillBikeTrailOne
      game.bikeTwo.moveDown
      game.fillBikeTrailTwo
    }
    assert.notStrictEqual(game.gameStatus, "DOUBLE KILL!")
  })

  it('knows that both bikes are alive on start', function () {
    let game = new Game
    assert.strictEqual(game.bikeOneStatus, "Alive")
    assert.strictEqual(game.bikeTwoStatus, "Alive")
  })

  it('can declare a player is not dead after a move on start', function () {
    let game = new Game
    game.bikeOne.moveRight
    game.bikeTwo.moveLeft
    game.fillBikeTrailOne
    game.fillBikeTrailTwo
    assert.strictEqual(game.bikeOneStatus, "Alive")
    assert.strictEqual(game.bikeTwoStatus, "Alive")
  })

  it('can declare a player is dead after a move into a trail', function () {
    let game = new Game
    game.bikeTwoStatus = "Dead"
    assert.strictEqual(game.gameStatus, "Player One Wins!")
  })

  it('can declare that when both players are dead its a double kill', function () {
    let game = new Game
    game.bikeOneStatus = "Dead"
    game.bikeTwoStatus = "Dead"
    assert.strictEqual(game.gameStatus, "DOUBLE KILL!")
  })

  it('declares that both bikes are dead when they move and colide making a double kill', function () {
    let game = new Game
    for (let i = 0; i < 300; i++) {
      game.bikeOne.moveRight
      game.fillBikeTrailOne
      game.bikeTwo.moveLeft
      game.fillBikeTrailTwo
    }
    assert.strictEqual(game.gameStatus, "DOUBLE KILL!")
  })

  it('declares that a bike is not a double kill when it moves but does not hit a trail', function () {
    let game = new Game
    for (let i = 1; i < 150; i++) {
      game.bikeOne.moveRight
      game.fillBikeTrailOne
      game.bikeTwo.moveLeft
      game.fillBikeTrailTwo
    }
    assert.notStrictEqual(game.gameStatus, "DOUBLE KILL!")
  })

  it('declares that both bikes are alive when they move only once', function () {
    let game = new Game
    game.bikeOne.moveRight
    game.fillBikeTrailOne
    game.bikeTwo.moveLeft
    game.fillBikeTrailTwo
    assert.strictEqual(game.gameStatus, "alive")
  })

  it('declares that a bike is not dead when it move a bunch but does not hit a trail', function () {
    let game = new Game
    for (let i = 1; i < 67; i++) {
      game.bikeOne.moveDown
      game.fillBikeTrailOne
    }

    for (let i = 1; i < 71; i++) {
      game.bikeTwo.moveLeft
      game.fillBikeTrailTwo
    }
    assert.strictEqual(game.gameStatus, "alive")
  })

})
