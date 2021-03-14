const Store = require('../client/Store');
const mockData = require('../../db.json');

describe('empty test', () => {
	let sut;

	beforeEach(() => {
		// Arrange
		sut = new Store();
		sut.state.films = mockData.films;
	}); 

	it('should do nothing', () => {
		// Act
		console.log('sut: ', sut);

		// Assert
		expect(1).toEqual(1);
	});
});
