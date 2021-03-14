class Store {
	constructor() {
		this.state = {
			films: []
		}
	}

  getFilms() {
  	console.log('getFilms!'); 
  }
}

module.exports = Store;
