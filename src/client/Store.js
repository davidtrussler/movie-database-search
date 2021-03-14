class Store {
	constructor() {
		this.state = {
			films: []
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

		results.innerHTML = ``;

		films.forEach(film => {
			results.innerHTML += `
				<li class="result">
					<span class="result__image"></span>
					<p class="result__title">${film.title}</p>
					<p class="result__date">${film.year}</p>
				</li>
			`;
		})
	}

  search(value) {
		let searchedFilms = this.state.films.filter(film => 
			film.title.toLowerCase().search(value.toLowerCase()) !== -1
		);

		return searchedFilms;
  }
}

module.exports = Store;
