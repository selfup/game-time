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
  }

  get moveRight() {
    if((this.x + 1) > 900) {
      return this.x = 0;
    } else {
      return this.x += this.position;
    }
  }

  get canMoveLeft() {
    if(_.includes(this.grid.combinedTrails, this.x)) {
      return "dead"
    } else {
      return "alive"
    }
  }

  get moveLeft() {
    if((this.x - 1) < 0) {
      return this.x = 900;
    } else {
      return this.x -= this.position;
    }
  }

  get canMoveUp() {
    if(_.includes(this.grid.combinedTrails, this.y)) {
      return "dead"
    } else {
      return "alive"
    }
  }

  get moveUp() {
    if((this.y + 1) > 600) {
      return this.y = 0;
    } else {
      return this.y += this.position;
    }
  }

  get canMoveDown() {
    if(_.includes(this.grid.combinedTrails, this.y)) {
      return "dead"
    } else {
      return "alive"
    }
  }

  get moveDown() {
    if((this.y + 1) < 0) {
      return this.y = 600;
    } else {
      return this.y += this.position;
    }
  }
}

module.exports = TronBike

// checks for a bike
// checks for a bike trail
// reasons it can't move right ^
