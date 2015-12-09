const chai = require('chai')
const assert = chai.assert
const TronBike = require('../lib/tron-bike')
const Grid = require('../lib/grid')

describe('if tron-bike works', function () {

  beforeEach(function() {
    this.simpleBike = new TronBike;
    this.simpleGrid = new Grid([1, 2], [45, 67]);
    this.cannotMoveGrid = new Grid([23, 48], [45, 67])
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
    assert.strictEqual(bike.grid.firstBikeTrail[0], 1)
    assert.strictEqual(bike.grid.firstBikeTrail[1], 2)
    assert.deepEqual(bike.grid.firstBikeTrail, [1, 2])
    assert.strictEqual(bike.grid.secondBikeTrail[0], 45)
    assert.strictEqual(bike.grid.secondBikeTrail[0], 45)
    assert.deepEqual(bike.grid.secondBikeTrail, [45, 67])
  })

  it('should be able to move right', function () {
    let bike = new TronBike(this.simpleGrid, 0, 2)
    assert.strictEqual(bike.moveRight, 1)
    assert.strictEqual(bike.moveRight, 2)
    assert.strictEqual(bike.moveRight, 3)
    assert.strictEqual(bike.moveRight, 4)
  })

  it('should set x back to zero after going off the grid when moving right', function ()  {
    let bike = new TronBike(this.simpleGrid, 899, 2)
    assert.strictEqual(bike.moveRight, 900)
    assert.strictEqual(bike.moveRight, 0)
  })

  it('should know it can move right', function ()  {
    let bike = new TronBike(this.simpleGrid, 300, 2)
    assert.strictEqual(bike.canMoveRight, "alive")
  })

  it('should know it cannot move right', function ()  {
    let bike = new TronBike(this.cannotMoveGrid, 23, 2)
    assert.strictEqual(bike.canMoveRight, "dead")
  })

  it('should know it can move left', function ()  {
    let bike = new TronBike(this.simpleGrid, 300, 2)
    assert.strictEqual(bike.canMoveLeft, "alive")
  })

  it('should know it cannot move left', function ()  {
    let bike = new TronBike(this.cannotMoveGrid, 23, 2)
    assert.strictEqual(bike.canMoveLeft, "dead")
  })

  it('should know it can move up', function ()  {
    let bike = new TronBike(this.simpleGrid, 300, 2)
    assert.strictEqual(bike.canMoveUp, "alive")
  })

  it('should know it cannot move up', function ()  {
    let bike = new TronBike(this.cannotMoveGrid, 23, 2)
    assert.strictEqual(bike.canMoveUp, "dead")
  })

  it('should know it can move down', function ()  {
    let bike = new TronBike(this.simpleGrid, 300, 2)
    assert.strictEqual(bike.canMoveDown, "alive")
  })

  it('should know it cannot move down', function ()  {
    let bike = new TronBike(this.cannotMoveGrid, 23, 2)
    assert.strictEqual(bike.canMoveDown, "dead")
  })

})
