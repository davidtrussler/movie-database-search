const Store = require('../client/Store');
const mockData = require('../../db.json');

// GIVEN I am on the search page
// WHEN I have entered a search term
// THEN I can see a grid of movies, each showing the poster, title and year of release
describe('search', () => {
	let sut;

	beforeEach(() => {
		// Arrange
		sut = new Store();
		sut.state.films = mockData.films;
	}); 

	it('should return the 2 films with "first" in the title when searching for "first"', () => {
		// Act
		let expected = [];
		let result = sut.search('first');

		mockData.films.map(film => {
			if ([1, 3].includes(film.id)) {
				expected.push(film);
			}
		});

		// Assert
		expect(result).toEqual(expected);
	});
});

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

	it()
}); 
