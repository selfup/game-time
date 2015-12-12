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
    this.grid.firstBikeTrail.push([this.bikeOne.x, this.bikeOne.y])
    this.grid.combinedTrails
  }

  get fillBikeTrailTwo() {
    this.grid.secondBikeTrail.push([this.bikeTwo.x, this.bikeTwo.y])
    this.grid.combinedTrails
  }

  get gameStatus() {
    if (this.bikeOne.isAlive && this.bikeTwo.isAlive) {
      return "alive"
    } else if (this.bikeOne.isDead && this.bike.isDead) {
      return "DOUBLE KILL!"
    } else if (this.bikeOne.isDead) {
      return "Player Two Wins!"
    } else if  (this.bikeTwo.isDead) {
      return "Player One Wins!"
    }
  }
}

module.exports = Game
