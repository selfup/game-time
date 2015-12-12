const chai = require('chai')
const assert = chai.assert
const TronBike = require('../lib/tron-bike')
const Grid = require('../lib/grid')

describe('if tron-bike works', function () {

  beforeEach(function() {
    this.simpleBike = new TronBike;
    this.simpleGrid = new Grid([[1, 2], [45, 67]]);
    this.cannotMoveGrid = new Grid([[23, 48], [45, 67]])
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
    assert.equal(bike.width, 2)
    assert.equal(bike.height, 2)
  })

  it('should take and store a real grid object', function () {
    let bike = new TronBike(this.simpleGrid, 0, 2)
    assert.isObject(bike)
    assert.deepEqual(bike.grid.firstBikeTrail, [ [ 1, 2 ], [ 45, 67 ] ])
    assert.deepEqual(bike.grid.secondBikeTrail, [ [ 450, 150 ] ])
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
    let bike = new TronBike(this.simpleGrid)
    this.simpleGrid.combinedTrails
    assert.strictEqual(bike.isAlive, true)
  })

  it('should know it cannot move right', function ()  {
    let bike = new TronBike(this.cannotMoveGrid, 23, 2)
    this.simpleGrid.combinedTrails
    assert.strictEqual(bike.isAlive, true)
  })

  it('should know it can move left', function ()  {
    let bike = new TronBike(this.simpleGrid, 300, 2)
    assert.strictEqual(bike.isAlive, true)
  })

  it('should know it can move up', function ()  {
    let bike = new TronBike(this.simpleGrid, 300, 48)
    assert.strictEqual(bike.isAlive, true)
  })

  it('should know it cannot move up', function ()  {
    let bike = new TronBike(this.cannotMoveGrid, 23, 48)
    assert.strictEqual(bike.isAlive, false)
  })

  it('should know it can move down', function ()  {
    let bike = new TronBike(this.simpleGrid, 300, 48)
    assert.strictEqual(bike.isAlive, true)
  })

  it('should know it cannot move down', function ()  {
    let bike = new TronBike(this.cannotMoveGrid, 23, 48)
    assert.strictEqual(bike.isAlive, false)
  })

  it('should know it can move in any direction at the start', function () {
    let bike = new TronBike(this.simpleGrid, 0, 300)
    assert.strictEqual(bike.isAlive, true)
  })

  it('should know it cannot move in a certain direction', function () {
    let bike = new TronBike(this.cannotMoveGrid, 23, 48)
    assert.strictEqual(bike.isAlive, false)
  })

})
