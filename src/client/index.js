import Store from './Store';
import Pagination from './Pagination';
import Modal from './Modal';
import './styles/main.scss';

const store = new Store();
const pagination = new Pagination(store);
const modal = new Modal(); 

const bindEvents = () => {
	document.querySelector('form').addEventListener('submit', e => {
		e.preventDefault();

		let value = e.target.querySelector('input[name="search"]').value;
		store.renderFilms(value);
	});

	document.querySelector('[data-paginationControls]').addEventListener('click', e => {
		e.preventDefault();

		if (e.target.href) {
			let control = e.target.href.split('/').pop();
			pagination.changePage(control);
		}
	});

	document.querySelector('[data-results]').addEventListener('click', e => {
		e.preventDefault();

		if (e.target.parentNode.href) {
			let id = e.target.parentNode.href.split('/').pop();
			modal.openModal(id);
		}
	})
};

document.addEventListener('DOMContentLoaded', () => {
	store.getFilms();
	bindEvents(); 
});
