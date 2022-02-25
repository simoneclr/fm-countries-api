import React, { useState, useEffect } from "react";

import CountryFilters from "./CountryFilters";
import CountriesList from "./CountriesList";

import countriesService from "../services/countriesService";

// Component that displays the dashboard with all countries
function CountriesDashboard() {
	
	// State variable containing the current search parameter
	const [search, setSearch] = useState("")

	// State variable containing the selected region filter
	const [region, setRegion] = useState()

	// State variable containing the list of available countries
	const [countries, setCountries] = useState(new Map())

	// When mounting the component, retrieve the list of available countries
	useEffect(()=> {
    countriesService.getAll()
      .then(data => {
				setCountries(data)
      })
      .catch(console.error)
  }, [])

	// Function that updates the seach term
	const handleSearchUpdate = (searchTerm) => {
		setSearch(searchTerm)
	}

	// Function that updates the region filter
	const handleRegionUpdate = (regionFilter) => {
		setRegion(regionFilter)
	}

	let filteredCountries = Array.from(countries)

	if (search.length > 0) {
		// Create case insensitive pattern from search string
		const pattern = new RegExp(search, "i",) 

		filteredCountries = filteredCountries.filter(([id, country]) => {
			return (pattern.test(country.name))
		})
	}

	return (
		<section className="dashboard">
			<CountryFilters updateSearch={handleSearchUpdate}
											region={region} updateRegion={handleRegionUpdate}/>

			<CountriesList countries={filteredCountries}/>
		</section>
	)
}

export default CountriesDashboard
