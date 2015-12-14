const _ =require('lodash')

class TronBike {
  constructor(grid, x, y, width = 3, height = 3) {
    this.grid = grid
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.position = 1
  }

  get moveRight() {
    if((this.x + 1) > 450) {
      return this.x = 0;
    } else {
      return this.x += this.position;
    }
  }

  get moveLeft() {
    if((this.x - 1) < 0) {
      return this.x = 450;
    } else {
      return this.x -= this.position;
    }
  }

  get moveUp() {
    if((this.y - 1) < 0) {
      return this.y = 300;
    } else {
      return this.y -= this.position;
    }
  }

  get moveDown() {
    if((this.y + 1) > 300) {
      return this.y = 0;
    } else {
      return this.y += this.position;
    }
  }

  get isAlive() {
    return !this.grid.combinedTrails.find(position => {
      return this.x === position[0] && this.y === position[1]
    });
  }

}

module.exports = TronBike
