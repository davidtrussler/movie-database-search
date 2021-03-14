import Store from './Store';

const store = new Store();

document.addEventListener('DOMContentLoaded', () => {
	store.getFilms(); 
});
