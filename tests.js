const pngToMatrix = require('./index')

describe('PNG To Matrix', function() {

  describe('Test Image conversion', function () {
    it('Should return a matrix of the test image', function (done) {
      pngToMatrix(__dirname + '/test_image.png', function(matrix) {
        done()
      })
    })
  })

})