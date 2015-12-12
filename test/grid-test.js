// const chai = require('chai')
// const assert = chai.assert
// const Grid = require('../lib/grid')
//
// describe('if grid works', function () {
//
//   beforeEach(function() {
//     this.newGrid = new Grid
//     this.simpleGrid = new Grid([1, 2], [45, 67]);
//     this.complexGrid = new Grid([[1,2], [45, 67]], [[9,8], [35, 70]])
//   })
//
//   it('should instantiate a new grid', function () {
//     assert.isObject(this.newGrid)
//     assert.deepEqual(this.newGrid.firstBikeTrail, [[0, 300]])
//     assert.deepEqual(this.newGrid.secondBikeTrail, [[900, 300]])
//   })
//
//   it('should instantiate a new grid', function () {
//     assert.isObject(this.simpleGrid)
//   })
//
//   it('should take in a first bike trail', function () {
//     assert.deepEqual(this.simpleGrid.firstBikeTrail, [1, 2])
//   })
//
//   it('should take in a second bike trail', function () {
//     assert.deepEqual(this.simpleGrid.secondBikeTrail, [45, 67])
//   })
//
//   it('should know the length of the concated trail', function () {
//    assert.strictEqual(this.simpleGrid.combinedTrails.length, 4)
//    assert.strictEqual(this.complexGrid.combinedTrails.length, 4)
//   })
//
//   it('should know the length of the concated trail', function () {
//    assert.deepEqual(this.complexGrid.combinedTrails, [[1,2], [45, 67], [9,8], [35, 70]])
//   })
//
// })
