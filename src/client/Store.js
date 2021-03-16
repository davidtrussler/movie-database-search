const Pagination = require('../client/Pagination');

class Store {
	constructor() {
		this.state = {
			films: [],
			searchedFilms: []
		}
	}

  getFilms() {
		fetch('http://localhost:3000/films')
			.then(response => response.json())
			.then((data) => {
				this.state.films = data; 
			});
  }

	renderFilms(value) {
		let films = this.search(value);
		let results = document.querySelector('[data-results]');
		let pagination = new Pagination(this);

		if (pagination.state.currentPage === 0) {
			pagination.state.currentPage = 1;
		}
		pagination.renderResultsCount();
		pagination.renderPageValues();

		results.innerHTML = ``;

		for(let i = 0; i < pagination.resultsPerPage; i++) {
			results.innerHTML += `
				<li class="result">
					<span class="result__image"></span>
					<p class="result__title">${films[i].title}</p>
					<p class="result__date">${films[i].year}</p>
				</li>
			`;
		}
	}

  search(value) {
		let searchedFilms = this.state.films.filter(film => 
			film.title.toLowerCase().search(value.toLowerCase()) !== -1
		);

		this.state.searchedFilms = searchedFilms;

		return searchedFilms;
  }
}

module.exports = Store;
