const _ = require('lodash')
const TronBike = require('./tron-bike')
const Grid = require('./grid')

class Game {
  constructor() {
    this.grid = new Grid
    this.bikeOne = new TronBike(this.grid, 0, 300)
    this.bikeTwo = new TronBike(this.grid, 900, 300)
    this.statusArray = ["bikeOne alive", "bikeTwo alive"]
  }

  get fillBikeTrailOne() {
    if(this.bikeOne.isAlive) {
      this.grid.firstBikeTrail.push([this.bikeOne.x, this.bikeOne.y])
      this.grid.combinedTrails
    } else {
      this.statusArray.push("bikeOne dead")
    }
  }

  get fillBikeTrailTwo() {
    if(this.bikeTwo.isAlive) {
      this.grid.secondBikeTrail.push([this.bikeTwo.x, this.bikeTwo.y])
      this.grid.combinedTrails
    } else {
      this.statusArray.push("bikeTwo dead")
    }
  }

  get gameStatus() {
    if (bikeOne.isAlive && bikeTwo.isAlive) {
      return "alive"
    } else if (bikeOne.isDead && bike.isDead) {
      return "DOUBLE KILL!"
    } else if (bikeOne.isDead) {
      return "Player Two Wins!"
    } else if  (bikeTwo.isDead) {
      return "Player One Wins!"
    }
  }
}

module.exports = Game
