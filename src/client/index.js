import Store from './Store';
import Search from './Search'; 
import './styles/main.scss';

const store = new Store();
const search = new Search(store); 

const bindEvents = () => {
	document.querySelector('form').addEventListener('submit', e => {
		let value = e.target.querySelector('input[name="search"]').value;
		e.preventDefault();
		store.renderFilms(value);
		search.renderResultsCount(); 
	}); 
}

document.addEventListener('DOMContentLoaded', () => {
	store.getFilms();
	bindEvents(); 
});
