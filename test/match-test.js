const chai = require('chai')
const assert = chai.assert
const Match = require('../lib/match')
const sinon = require('sinon/pkg/sinon')
const $ = require('jquery')

describe('if the game works', function () {

  it('the match is intantiated properly', function () {
    let game = new Game
    assert.isObject(game)
  })

})
