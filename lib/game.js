const _ =require('lodash')
// const Grid = new Grid()
const TronBike = require('./tron-bike')
const Grid = require('./grid')

class Game {
  constructor() {
    this.grid = new Grid()
    this.bikeOne = new TronBike(grid, 0, 300)
    this.bikeTwo = new TronBike(grid, 900, 300)
  }

  get fillBikeTrailOne() {
    this.grid.firstBikeTrail.push([this.bikeOne.x, this.bikeOne.y])
    this.grid.combineTrails
  }

  get fillBikeTrailTwo() {
    this.grid.secondBikeTrail.push([this.bikeTwo.x, this.bikeTwo.y])
    this.grid.combineTrails
  }

}

module.exports = Game
