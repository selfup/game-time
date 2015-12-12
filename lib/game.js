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
    if (this.bikeOne.isAlive) {
    this.grid.firstBikeTrail.push([this.bikeOne.x, this.bikeOne.y])
    this.grid.combinedTrails
    } else {
      this.statusArray.push("bikeOne Dead")
    }
  }

  get fillBikeTrailTwo() {
    if (this.bikeTwo.isAlive) {
    this.grid.secondBikeTrail.push([this.bikeTwo.x, this.bikeTwo.y])
    this.grid.combinedTrails
    } else {
      this.statusArray.push("bikeTwo Dead")
    }
  }

  // get gameStatus() {
  //   console.log(this.bikeOne.isAlive);
  //   if (this.bikeOne.isAlive && this.bikeTwo.isAlive) {
  //     return "alive"
  //   } else if (this.bikeOne.isAlive === false && this.bikeTwo.isAlive === false) {
  //     return "DOUBLE KILL!"
  //   } else if (this.bikeOne.isAlive === false) {
  //     return "Player Two Wins!"
  //   } else if  (this.bikeTwo.isAlive === false) {
  //     return "Player One Wins!"
  //   }
  // }

  get gameStatus() {
    let bikeOneAlive = !_.includes(this.statusArray, "bikeOne Dead");
    let bikeOneDead = _.includes(this.statusArray, "bikeOne Dead");
    let bikeTwoAlive = !_.includes(this.statusArray, "bikeTwo Dead");
    let bikeTwoDead = _.includes(this.statusArray, "bikeTwo Dead");

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
