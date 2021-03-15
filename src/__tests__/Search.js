const Search = require('../client/Search');
const Store = require('../client/Store');
const mockData = require('../../db.json');

// GIVEN I am on the search page
// WHEN the search results are displayed
// THEN I can see the results load, (showing x of x) to indicate the current paginated group being displayed
// AND I can click arrows to navigate between the groups of results
describe('pagination', () => {
	let sut;
	let result;

	beforeEach(() => {
		// Arrange
		sut = new Store();
		sut.state.films = mockData.films;
	}); 

	it('should display the correct values for the number of results', () => {
		// Act
		// Assert
	});

	it('should display the correct values for the current page and total pages', () => {
		// Act
		// Assert
	});

	it('should show the correct films when the pagination controls are activated', () => {
		// Act
		// Assert
	}); 
}); 
