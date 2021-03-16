const Store = require('../client/Store');

class Pagination {
	constructor(store) {
		this.store = store;
		this.resultsPerPage = 4;
		this.state = {
			currentPage: 0
		}
	}

	renderResultsCount() {
		let values = this.getPaginationValues(); 

		document.querySelector('[data-resultsCount]').textContent = values.searched; 
	}

	renderPageValues() {
		let values = this.getPaginationValues(); 

		document.querySelector('[data-currentPage]').textContent = this.state.currentPage; 
		document.querySelector('[data-totalPages]').textContent = values.totalPages; 
	}

	getPaginationValues() {
		let 
			searched = this.store.state.searchedFilms.length,
			currentPage = this.state.currentPage, 
			totalPages = Math.ceil(searched / this.resultsPerPage);

		return {
			searched: searched, 
			currentPage: currentPage, 
			totalPages: totalPages
		}
	}
}

module.exports = Pagination;
