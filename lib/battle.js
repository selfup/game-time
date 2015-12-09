const _ =require('lodash')
// const Grid = new Grid()
const TronBike = require('./tron-bike')
const Grid = require('./grid')

class Match {
  constructor() {
    this.grid = new Grid
    this.bikeOne = new TronBike(grid, 0, 300)
    this.bikeTwo = new TronBike(grid, 900, 300)
  }


}

module.exports = Match
