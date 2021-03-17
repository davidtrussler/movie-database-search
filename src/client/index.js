import Store from './Store';
import Pagination from './Pagination'; 
import './styles/main.scss';

const store = new Store();
const pagination = new Pagination(store);

const bindEvents = () => {
	document.querySelector('form').addEventListener('submit', e => {
		let value = e.target.querySelector('input[name="search"]').value;
		e.preventDefault();
		store.renderFilms(value);
	});

	document.querySelector('[data-paginationControls]').addEventListener('click', e => {
		let control = e.target.href.split('/').pop();
		e.preventDefault();
		pagination.changePage(control);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	store.getFilms();
	bindEvents(); 
});
