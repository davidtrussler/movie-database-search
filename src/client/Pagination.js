const Store = require('../client/Store');

class Pagination {
	constructor(store) {
		this.store = store;
		this.resultsPerPage = 4;
	}

	renderResultsCount() {
		let values = this.getPaginationValues(); 

		document.querySelector('[data-resultsCount]').textContent = values.searched; 
	}

	renderPageValues() {
		let values = this.getPaginationValues(); 

		document.querySelector('[data-currentPage]').textContent = this.store.state.currentPage; 
		document.querySelector('[data-totalPages]').textContent = values.totalPages; 
	}

	getPaginationValues() {
		let 
			searched = this.store.state.searchedFilms.length,
			currentPage = this.store.state.currentPage, 
			totalPages = Math.ceil(searched / this.resultsPerPage);

		return {
			searched: searched, 
			currentPage: currentPage, 
			totalPages: totalPages
		}
	}

	changePage(control) {
		let currentPage = this.store.state.currentPage; 

		if (control === 'prev') {
			if (currentPage > 1) {
				this.store.state.currentPage--;
			}
		} else {
			if (currentPage < Math.ceil(this.store.state.searchedFilms.length / this.resultsPerPage))
			this.store.state.currentPage++;
		}

		this.store.renderFilms(); 
	}
}

module.exports = Pagination;
