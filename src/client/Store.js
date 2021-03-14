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
}

module.exports = Store;
