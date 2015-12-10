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
    if(this.bikeOne.canMove === 'alive') {
    this.grid.firstBikeTrail.push(this.bikeOne.x, this.bikeOne.y)
    this.grid.combinedTrails
    this.statusArray.push("bikeOne alive")
    } else {
      this.statusArray.push("bikeOne dead")
    }
  }

  get fillBikeTrailTwo() {
    if(this.bikeTwo.canMove === 'alive') {
    this.grid.secondBikeTrail.push(this.bikeTwo.x, this.bikeTwo.y)
    this.grid.combinedTrails
    this.statusArray.push("bikeTwo alive")
    } else {
      this.statusArray.push("bikeTwo dead")
    }
  }

  get gameStatus() {
    let bikeOneDead = _.includes(this.statusArray, "bikeOne dead");
    let bikeTwoDead = _.includes(this.statusArray, "bikeTwo dead");

    if (bikeOneDead && bikeTwoDead) {
      return "DOUBLE KILL!"
    } else if (bikeTwoDead) {
      return "Player One Wins!"
    } else if  (bikeOneDead) {
      return "Player Two Wins!"
    } else {
      return "alive"
    }
  }
}

module.exports = Game
