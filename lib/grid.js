const TronBike = require('./grid')

class Grid {
  constructor(firstBikeTrail, secondBikeTrail) {
    this.firstBikeTrail = firstBikeTrail || [[0, 150]]
    this.secondBikeTrail = secondBikeTrail || [[450, 150]]
  }

  get combinedTrails() {
    return this.firstBikeTrail.concat(this.secondBikeTrail)
  }
}

module.exports = Grid
