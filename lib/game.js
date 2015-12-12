const _ = require('lodash')
const TronBike = require('./tron-bike')
const Grid = require('./grid')

class Game {
  constructor() {
    this.grid = new Grid
    this.bikeOne = new TronBike(this.grid, 0, 300)
    this.bikeTwo = new TronBike(this.grid, 900, 300)
    this.bikeOneStatus = "Alive"
    this.bikeTwoStatus = "Alive"
  }

  get fillBikeTrailOne() {
    if (this.bikeOne.isAlive) {
    this.grid.firstBikeTrail.push([this.bikeOne.x, this.bikeOne.y])
    this.grid.combinedTrails
    } else {
      this.bikeOneStatus = "Dead"
    }
  }

  get fillBikeTrailTwo() {
    if (this.bikeTwo.isAlive) {
    this.grid.secondBikeTrail.push([this.bikeTwo.x, this.bikeTwo.y])
    this.grid.combinedTrails
    } else {
      this.bikeTwoStatus = "Dead"
    }
  }

  get gameStatus() {
    if (this.bikeOneStatus === "Alive" && this.bikeTwoStatus === "Alive") {
      return "alive"
    } else if (this.bikeOneStatus === "Dead" && this.bikeTwoStatus === "Dead") {
      return "DOUBLE KILL!"
    } else if (this.bikeOneStatus === "Dead") {
      return "Player Two Wins!"
    } else if  (this.bikeTwoStatus === "Dead") {
      return "Player One Wins!"
    }
  }
}

module.exports = Game
