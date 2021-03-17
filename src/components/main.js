const AppMain = {
	template: `
		<main>
			<p><span data-resultsCount>0</span> Results found</p>

			<p>Page <span data-currentPage>0</span> of <span data-totalPages>0</span>

			<ul data-paginationControls>
				<li>
					<a href="prev">Previous</a>
				</li>

				<li>
					<a href="next">Next</a>
				</li>
			</ul>

			<ul data-results class="results"></ul>
		</main>
	`	
}

module.exports = AppMain;
