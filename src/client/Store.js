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
				<li>
					<span>image</span>
					<p>${film.title}</p>
					<p>${film.year}</p>
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
