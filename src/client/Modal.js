const Store = require('../client/Store');

class Modal {
	constructor(store) {
		this.store = store;
	}

	openModal(id) {
		let film = this.store.state.films.find(film => film.id == id); 
		let modal = document.querySelector('[data-results-modal]'); 
		let overlay = document.querySelector('[data-results-modal-overlay]');
		let closeBtn; 

		modal.innerHTML = `
			<div class="modal__image"></div>
			<article class="modal__content">
				<header>
					<hgroup class="modal__title">
						<h1>${film.title}</h1>
						<date>${film.year}</date>
					</hgroup>
				</header>
				<ul class="modal__credits">
					<li>Director: ${film.director}</li>
					<li>Cast: ${film.cast}</li>
					<li>Genre: ${film.genre}</li>
				</ul>
				${film.plot}
			</article>
			<button data-results-modal-close class="modal_close">X</button>
		`;

		modal.className = modal.className + ' active';
		overlay.className = overlay.className + ' active';

		closeBtn = document.querySelector('[data-results-modal-close]'); 

		closeBtn.addEventListener('click', () => {
			this.closeModal(); 
		}); 
	}

	closeModal() {
		let modal = document.querySelector('[data-results-modal]'); 
		let overlay = document.querySelector('[data-results-modal-overlay]');

		modal.className = modal.className.replace(' active', '');
		overlay.className = overlay.className.replace(' active', '');
	}
}

module.exports = Modal;
