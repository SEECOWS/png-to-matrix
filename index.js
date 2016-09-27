const getPixels = require("get-pixels")
 
module.exports = (path, callback) => {
	getPixels(path, (err, pixels) => {
		if (err) throw err
		var matrix = []
		var count = 0
		var rgbaIndex = 0
		var currentObj = {}

		Object.keys(pixels.data).forEach((k, i) => {
			if (i > pixels.shape[0] * 4 * (count + 1)) count++
			if (rgbaIndex < 3) {
				rgbaIndex++
			} else {
				if (!matrix[count]) matrix[count] = []
				matrix[count].push(currentObj)
				currentObj = {}
				rgbaIndex = 0
			}
			if (rgbaIndex == 0) currentObj.a = pixels.data[k]
			if (rgbaIndex == 1) currentObj.r = pixels.data[k]
			if (rgbaIndex == 2) currentObj.g = pixels.data[k]
			if (rgbaIndex == 3) currentObj.b = pixels.data[k]
		})
		callback(matrix)
	})
}