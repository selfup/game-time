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
    assert.deepEqual(game.grid.firstBikeTrail, [[ 0, 300 ]])
  })

  it('the secondBikeTrail is intantiated properly', function () {
    let game = new Game
    assert.deepEqual(game.grid.secondBikeTrail, [[900, 300]])
  })

  it('the combinedTrails is intantiated properly', function () {
    let game = new Game
    assert.deepEqual(game.grid.combinedTrails, [[ 0, 300] , [900, 300]])
  })

  it('can add to combinedTrails on move', function () {
    let game = new Game
    game.bikeOne.moveRight
    game.fillBikeTrailOne
    game.bikeTwo.moveLeft
    game.fillBikeTrailTwo
    assert.deepEqual(game.grid.combinedTrails, [ [ 0, 300 ], [ 1, 300 ], [ 900, 300 ], [ 899, 300 ] ])
  })

  it('can declare a player is not dead after a move on start', function () {
    let game = new Game
    game.bikeOne.moveRight
    game.bikeTwo.moveLeft
    game.fillBikeTrailOne
    game.fillBikeTrailTwo
    assert.deepEqual(game.grid.firstBikeTrail, [ [ 0, 300 ], [ 1, 300 ] ])
  })

   it('declares that both bikes are dead when it they colide', function () {
    let game = new Game
    for (let i = 0; i < 451; i++) {
      game.bikeOne.moveRight
      game.bikeTwo.moveLeft
      game.fillBikeTrailOne
      game.fillBikeTrailTwo
    }
    console.log(game.grid.firstBikeTrail);
    console.log(game.grid.secondBikeTrail);
    assert.strictEqual(game.gameStatus, "DOUBLE KILL!")
  })

  it('declares that a bike is not dead when it move a bunch but does not hit', function () {
    let game = new Game
    for (let i = 1; i < 45; i++) {
      game.bikeOne.moveRight
      game.fillBikeTrailOne
      game.bikeTwo.moveLeft
      game.fillBikeTrailTwo
    }
    assert.notStrictEqual(game.gameStatus, "DOUBLE KILL!")
  })

  it('is not dead when it move a bunch but does not hit', function () {
    let game = new Game
    for (let i = 1; i < 2; i++) {
      game.bikeOne.moveUp
      game.fillBikeTrailOne
      game.bikeTwo.moveDown
      game.fillBikeTrailTwo
    }
    assert.notStrictEqual(game.gameStatus, "DOUBLE KILL!")
  })

})
