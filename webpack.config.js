const path = require('path'); 

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, 'src/client/index.js')
	}, 
	output: {
		path: path.resolve(__dirname, './public'), 
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', 
					'css-loader', 
					'sass-loader'
				]
			}
		]
	}
}
