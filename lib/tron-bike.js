const _ =require('lodash')

class TronBike {
  constructor(grid, x, y, width = 20, height = 20) {
    this.grid = grid
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.tracker = []
    this.position = 1
  }

  get xPostions() {
    this.grid.combinedTrails
  }

  get canMoveRight() {
    if(_.includes(this.grid.combinedTrails, this.x)) {
      return "dead"
    } else {
      return "alive"
    }
    // checks for a bike
    // checks for a bike trail
    // reasons it can't move right ^
  }

  get moveRight() {
    if((this.x + 1) > 900) {
      return this.x = 0;
    } else {
      return this.x += this.position;
    }
  }
}

module.exports = TronBike
