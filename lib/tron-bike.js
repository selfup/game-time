const _ =require('lodash')

class TronBike {
  constructor(grid, x, y, width = 2, height = 2, color) {
    this.grid = grid
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.position = 1
    this.color = color || '#FF0000'
  }

  get moveRight() {
    if((this.x + 1) > 900) {
      return this.x = 0;
    } else {
      return this.x += this.position;
    }
  }

  get moveLeft() {
    if((this.x - 1) < 0) {
      return this.x = 900;
    } else {
      return this.x -= this.position;
    }
  }

  get moveUp() {
    if((this.y - 1) < 0) {
      return this.y = 600;
    } else {
      return this.y -= this.position;
    }
  }

  get moveDown() {
    if((this.y + 1) > 600) {
      return this.y = 0;
    } else {
      return this.y += this.position;
    }
  }

  get isAlive() {
    return !this.grid.combinedTrails.find(position => {
      // console.log([position[0], position[1]]);
      return this.x === position[0] && this.y === position[1]
    });
  }

}

module.exports = TronBike
