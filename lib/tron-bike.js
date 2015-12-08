class TronBike {
  constructor(grid, x, y, width = 20, height = 20) {
    this.grid = grid
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  get canMoveRight() {
    // checks for a bike
    // checks for a bike trail
    // reasons it can't move right ^
  }

  get moveRight() {
    this.x++
    //add former position and all pixels that it took up to that point on grid.trails()
  }
}

module.exports = TronBike
