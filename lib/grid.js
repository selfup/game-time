const TronBike = require('./grid')

class Grid {
  constructor(firstBikeTrail, secondBikeTrail) {
    this.firstBikeTrail = firstBikeTrail || [[0, 300]]
    this.secondBikeTrail = secondBikeTrail || [[900, 300]]
  }

  get combinedTrails() {
    return this.firstBikeTrail.concat(this.secondBikeTrail)
  }
}

module.exports = Grid
