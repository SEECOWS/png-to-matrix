# PNG To Matrix
## Convert Images to Matrices with one simple function

### How it works:

```
const pngToMatrix = require('png-to-matrix')

pngToMatrix("path/to/image", (matrix) => {
	console.log(matrix)
	/*
	** Returns:
	** { 'N Dimensions of X as a numerical key': [ N Dimensions of Y as an array - Each array value has a "r,g,b,a" value. ] }
	*/
})
```

## Published under MIT License