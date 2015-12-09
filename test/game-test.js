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

})
