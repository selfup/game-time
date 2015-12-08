const chai = require('chai');
const assert = chai.assert;
const TronBike = require('../lib/tron-bike');

describe('if tron-bike works', function () {

  beforeEach(function() {
    this.bike = new TronBike();
  })

  it('should instantiate a new tron-bike', function () {
    assert.isObject(this.bike);
  });

});
