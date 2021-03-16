const Pagination = require('../client/Pagination');
const Store = require('../client/Store');
const mockData = require('../../db.json');

// GIVEN I am on the search page
// WHEN the search results are displayed
// THEN I can see the results load, (showing x of x) to indicate the current paginated group being displayed
// AND I can click arrows to navigate between the groups of results
describe('pagination', () => {
	let sut, store, result;
	let searchedFilmsId = [5, 6, 7, 8];

	beforeEach(() => {
		// Arrange
		store = new Store();
		store.state.films = mockData.films;
		store.state.searchedFilms = mockData.films.filter(data => searchedFilmsId.includes(data.id)); 
		sut = new Pagination(store);
	}); 

	it('should display the correct values for the number of results', () => {
		// Act
		result = sut.getPaginationValues();

		// Assert
		expect(result.searched).toEqual(4);
	});

	it('should display the correct values for the current page and total pages', () => {
		// Act
		sut.resultsPerPage = 2; 
		// store.renderFilms('Another');
		result = sut.getPaginationValues();

		// Assert
		// expect(result.currentPage).toEqual(1);
		expect(result.totalPages).toEqual(2); 
	});

	it('should show the correct films when the pagination controls are activated', () => {
		// Act
		// Assert
	}); 
}); 
