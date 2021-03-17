const Store = require('../client/Store');

class Modal {
	constructor(store) {
		this.store = store;
	}

	openModal(id) {
		let film = this.store.state.films.find(film => film.id == id); 
		let modal = document.querySelector('[data-results-modal]'); 
		let overlay = document.querySelector('[data-results-modal-overlay]');

		modal.innerHTML = `
			<div class="modal__image"></div>
			<div class="modal__content">
				<h1>${film.title}</h1>
				<date>${film.year}</date>
				<ul>
					<li>Director: ${film.director}</li>
					<li>Cast: ${film.cast}</li>
					<li>Genre: ${film.genre}</li>
				</ul>
				${film.plot}
			</div>
			<button>X</button>
		`;

		modal.className = 'active';
		overlay.className = 'active';
	}
}

module.exports = Modal;
