const path = require('path'); 

module.exports = {
	mode: 'development', 
	entry: {
		main: path.resolve(__dirname, 'src/client/index.js')
	}, 
	output: {
		path: path.resolve(__dirname, './public'), 
		filename: 'main.js'
	}
}
