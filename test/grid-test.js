const chai = require('chai')
const assert = chai.assert
const Grid = require('../lib/grid')

describe('if grid works', function () {

  beforeEach(function() {
    this.simpleGrid = new Grid([1, 2], [45, 67]);
    this.complexGrid = new Grid([[1,2], [45, 67]], [[9,8], [35, 70]])
  })

  it('should instantiate a new grid', function () {
    assert.isObject(this.simpleGrid)
  })

  it('should get the concated trail', function () {
   assert.strictEqual(this.simpleGrid.combinedTrails.length, 4)
   assert.strictEqual(this.complexGrid.combinedTrails.length, 4)
   assert.deepEqual(this.complexGrid.combinedTrails, [[1,2], [45, 67], [9,8], [35, 70]])
  })

})
