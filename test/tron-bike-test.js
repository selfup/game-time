const chai = require('chai')
const assert = chai.assert
const TronBike = require('../lib/tron-bike')
const Grid = require('../lib/grid')

describe('if tron-bike works', function () {

  beforeEach(function() {
    this.simpleBike = new TronBike;
    this.simpleGrid = new Grid([1, 2], [45, 67]);
  })

  it('should instantiate a new tron-bike', function () {
    assert.isObject(this.simpleBike)
  })

  it('should take and store a grid value', function () {
    let bike = new TronBike("grid", 4)
    assert.isObject(bike)
    assert.equal(bike.grid, "grid")
  })

  it('should take and store a grid and an x value', function () {
    let bike = new TronBike("example", 4)
    assert.isObject(bike)
    assert.equal(bike.grid, "example")
    assert.equal(bike.x, 4)
  })

  it('should take and store a grid, an x, and a y value', function () {
    let bike = new TronBike("grid", 0, 2)
    assert.isObject(bike)
    assert.equal(bike.grid, "grid")
    assert.equal(bike.x, 0)
    assert.equal(bike.y, 2)
  })

  it('should take/store all parameters and have default w and h', function () {
    let bike = new TronBike("grid", 23, 42)
    assert.isObject(bike)
    assert.equal(bike.grid, "grid")
    assert.equal(bike.x, 23)
    assert.equal(bike.y, 42)
    assert.equal(bike.width, 20)
    assert.equal(bike.height, 20)
  })

  it('should take and store a real grid object', function () {
    let bike = new TronBike(this.simpleGrid, 0, 2)
    assert.isObject(bike)
    assert.strictEqual(bike.grid.firstBikeTrail, [1, 2])
    assert.strictEqual(bike.grid.secondBikeTrail, [45, 67])
  })

})
