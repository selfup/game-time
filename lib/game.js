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
    this.grid.firstBikeTrail.push([this.bikeOne.x, this.bikeOne.y])
    this.grid.combinedTrails
    if(this.bikeOne.canMove === "dead") {
      this.statusArray.push("bikeOne dead")
    }
  }

  get fillBikeTrailTwo() {
    this.grid.secondBikeTrail.push([this.bikeTwo.x, this.bikeTwo.y])
    this.grid.combinedTrails
    if(this.bikeTwo.canMove === "dead") {
      this.statusArray.push("bikeTwo dead")
    }
  }

  get gameStatus() {
    let bikeOneAlive = !_.includes(this.statusArray, "bikeOne dead");
    let bikeOneDead = _.includes(this.statusArray, "bikeOne dead");
    let bikeTwoAlive = !_.includes(this.statusArray, "bikeTwo dead");
    let bikeTwoDead = _.includes(this.statusArray, "bikeTwo dead");

    if (bikeOneAlive && bikeTwoAlive) {
      return "alive"
     } else if (bikeOneDead && bikeTwoDead) {
      return "DOUBLE KILL!"
    } else if (bikeOneDead) {
      return "Player Two Wins!"
    } else if  (bikeTwoDead) {
      return "Player One Wins!"
    }
  }
}

module.exports = Game
