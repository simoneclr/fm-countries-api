class Country {
	constructor (country) {
		this.id = country.alpha3Code
		this.capital = country.capital

		if (country.currencies) {
			this.currencies = country.currencies.map(c => c.name)
		} else {
			this.currencies = []
		} 
		
		this.domain = country.topLevelDomain[0]
		this.flag = country.flags.svg

		if (!this.flag) {
			// Apparently not all countries have flag data stored in the same format
			this.flag = country.flags[0]
		}

		if (country.languages) {
			this.languages = country.languages.map(l => l.name)
		} else {
			this.languages = []
		}

		this.name = country.name
		this.nativeName = country.nativeName
		this.neighbors = country.borders
		this.population = country.population
		this.region = country.region
		this.subRegion = country.subregion
	}
}

export default Country