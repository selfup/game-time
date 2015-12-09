const chai = require('chai')
const assert = chai.assert
const Game = require('../lib/game')
const TronBike = require('../lib/tron-bike')
const Grid = require('../lib/grid')

describe('if the game works', function () {

  it('the grid is intantiated properly', function () {
    let game = new Game
    assert.isObject(this.game)
    // assert.strictEqual(this.game.grid.firstBikeTrail, '')
  })

})