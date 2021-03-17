const AppMain = {
	template: `
		<main>
			<div class="results-container">
				<p class="results-count"><span data-resultsCount>0</span> Results found</p>

				<nav class="results-navigation">
					<p class="navigation__page-count">Page <span data-currentPage>0</span> of <span data-totalPages>0</span>

					<ul data-paginationControls class="navigation__page-controls">
						<li class="navigation__page-control">
							<a href="prev">
								<span class="visually-hidden">Previous</span>
							</a>
						</li>

						<li class="navigation__page-control">
							<a href="next">
								<span class="visually-hidden">Next</span>
							</a>
						</li>
					</ul>
				</nav>

				<ul data-results class="results"></ul>
			</div>
		</main>
	`	
}

module.exports = AppMain;
