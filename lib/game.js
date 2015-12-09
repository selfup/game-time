const _ = require('lodash')
const TronBike = require('./tron-bike')
const Grid = require('./grid')

class Game {
  constructor() {
    this.grid = new Grid
    this.bikeOne = new TronBike(this.grid, 0, 300)
    this.bikeTwo = new TronBike(this.grid, 900, 300)
  }

  get fillBikeTrailOne() {
    if(this.bikeOne.canMove === 'alive') {
    this.grid.firstBikeTrail.push(this.bikeOne.x, this.bikeOne.y)
    this.grid.combinedTrails
    } else {
      //call end the game function
    }
  }

  get fillBikeTrailTwo() {
    if(this.bikeTwo.canMove === 'alive') {
    this.grid.secondBikeTrail.push(this.bikeTwo.x, this.bikeTwo.y)
    this.grid.combinedTrails
    } else {
      //call end the game function
    }
  }


}

module.exports = Game
