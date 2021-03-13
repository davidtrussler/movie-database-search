const Vue = require('vue'); 
const AppHeader = require('./components/header'); 
const AppMain = require('./components/main'); 
const AppFooter = require('./components/footer'); 

module.exports = function createSSRApp(url) {
	return Vue.createSSRApp({
		components: {
			'app-header': AppHeader, 
			'app-main': AppMain, 
			'app-footer': AppFooter
		}, 
		template: `
			<!DOCTYPE html>
			<html lang="en-GB">
				<head>
					<title>Movie Database Search</title>
					<script type="text/javascript" src="main.js"></script>
				</head>

				<body>
					<app-header></app-header>
					<app-main></app-main>
					<app-footer></app-footer>
				</body>
			</html>
		`
	})
}
