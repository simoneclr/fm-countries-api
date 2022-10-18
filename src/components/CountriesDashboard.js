import React, { useState, useEffect } from "react";

import CountryFilters from "./CountryFilters";
import CountriesList from "./CountriesList";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import countriesService from "../services/countriesService";

// Translates state variable into display names to compare with country data
const REGION_NAMES = {
	all: "ALL",
	placeholder: "ALL",
	africa: "Africa",
	americas: "Americas",
	asia: "Asia",
	europe: "Europe",
	oceania: "Oceania"
}

const STATUS = {
	ok: "OK",
	loading: "LOADING",
	error: "ERROR"
}

// Component that displays the dashboard with all countries
function CountriesDashboard() {

	// State variable controlling the presence of errors
	const [status, setStatus] = useState(STATUS.ok)
	
	// State variable containing the current search parameter
	const [search, setSearch] = useState("")

	// State variable containing the selected region filter
	const [region, setRegion] = useState("placeholder")

	// State variable containing the list of available countries
	const [countries, setCountries] = useState(new Map())

	// When mounting the component, retrieve the list of available countries
	useEffect(()=> {
		setStatus(STATUS.loading)

    countriesService.getAll()
      .then(data => {
				setCountries(data)
				setStatus(STATUS.ok)
      })
      .catch(error => {
				console.log("An error has occurred:", error.message)
				setStatus(STATUS.error)
			})
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

	// Filter based on name search
	if (search.length > 0) {
		// Create case insensitive pattern from search string
		const pattern = new RegExp(search, "i",) 

		filteredCountries = filteredCountries.filter(([id, country]) => {
			return (pattern.test(country.name))
		})
	}

	// Filter by region
	if (region !== "all" && region !== "placeholder") {
		filteredCountries = filteredCountries.filter(([id, country]) => {
			return (country.region === REGION_NAMES[region])
		})
	}

	return (
		<section className="dashboard">
			<CountryFilters search={search} updateSearch={handleSearchUpdate}
											region={region} updateRegion={handleRegionUpdate}/>

			{ (status === STATUS.loading) &&
				<LoadingPage />
			}

			{ (status === STATUS.error) &&
				<ErrorPage />
			}

			{ (status === STATUS.ok) && 
				<CountriesList countries={filteredCountries}/>				
			}
		</section>
	)
}

export default CountriesDashboard
