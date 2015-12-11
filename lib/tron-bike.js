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
    this.stat = "alive"
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
    if((this.y - 1) > 0) {
      return this.y = 600;
    } else {
      return this.y += this.position;
    }
  }

  get moveDown() {
    if((this.y + 1) < 600) {
      return this.y = 0;
    } else {
      return this.y += this.position;
    }
  }

  get canDo() {
    let stat = []
    let x = this.x
    let y = this.y
    _.each(this.grid.combinedTrails, function (element) {
      if (_.isEqual(element, [ x, y ])) {
        stat.push("dead")
      } else {
        stat.push("alive")
      }
      // console.log(element)
    })
    // console.log([x, y])
    // console.log(stat)
    return stat
  }

  get canMove() {
    // console.log(this.canDo)
    if (_.includes(this.canDo, "dead")) {
      return "dead"
    } else {
      return "alive"
    }
  }

}

module.exports = TronBike
