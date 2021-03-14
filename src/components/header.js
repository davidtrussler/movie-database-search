const AppHeader = {
	template: `
		<header>
			<h1 class="header__title">
				<span class="visually-hidden">MMTFlix</span>
			</h1>

			<form name="search">
				<input name="search" type="text" placeholder="Search here ..."/>
				<button type="submit" name="submit">
					<span class="visually-hidden">Search</span>
				</button>
			</form>
		</header>
	`	
}

module.exports = AppHeader;
