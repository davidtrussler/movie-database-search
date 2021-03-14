import Store from './Store';

const store = new Store();
const bindEvents = () => {
	document.querySelector('form').addEventListener('submit', e => {
		let value = e.target.querySelector('input[name="search"]').value;
		e.preventDefault();
		store.search(value); 
	})
}

document.addEventListener('DOMContentLoaded', () => {
	store.getFilms();
	bindEvents(); 
});
