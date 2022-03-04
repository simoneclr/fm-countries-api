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

		if (country.languages) {
			this.languages = country.languages.map(l => l.name)
		} else {
			this.languages = []
		}

		this.name = country.name
		this.nativeName = country.nativeName

		if (country.borders) {
			this.neighbors = country.borders
		} else {
			this.neighbors = []
		}
		
		this.population = country.population
		this.region = country.region
		this.subRegion = country.subregion
	}
}

export default Country