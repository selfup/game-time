const TronBike = require('./grid')

class Grid {
  constructor(firstBikeTrail, secondBikeTrail) {
    this.firstBikeTrail = firstBikeTrail
    this.secondBikeTrail = secondBikeTrail
  }

  get combinedTrails() {
    return this.firstBikeTrail.concat(this.secondBikeTrail)
  }
}

module.exports = Grid
