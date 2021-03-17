const Pagination = require('../client/Pagination');

class Store {
	constructor() {
		this.pagination = new Pagination(this);
		this.state = {
			films: [],
			searchedFilms: [], 
			currentPage: 1
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
		let 
			films,
			results = document.querySelector('[data-results]');

		if (value) {
			films = this.search(value);
		} else {
			films = this.state.searchedFilms; 
		}

		this.pagination.renderResultsCount();
		this.pagination.renderPageValues();

		results.innerHTML = ``;

		for (
			let i = this.pagination.resultsPerPage * (this.state.currentPage - 1); 
			i < this.pagination.resultsPerPage * this.state.currentPage; 
			i++
		) {
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
