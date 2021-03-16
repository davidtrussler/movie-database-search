const Store = require('../client/Store');

class Search {
	constructor(store) {
		this.store = store; 
	}

	renderResultsCount() {
		let values = this.getPaginationValues(); 

		document.querySelector('[data-resultsCount]').textContent = values.searched; 
	}

	getPaginationValues() {
		let searched = this.store.state.searchedFilms.length;

		return {
			searched: searched
		}
	}
}

module.exports = Search;
