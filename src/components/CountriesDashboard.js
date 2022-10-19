import React, { useState, useEffect, useMemo } from "react";

import CountryFilters from "./CountryFilters";
import CountriesList from "./CountriesList";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import { REGION_NAMES } from "../util/regions";

import countriesService from "../services/countriesService";

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

	const filterCountries = (countriesList, searchTerm, selectedRegion) => {
		let res = Array.from(countriesList)

		// Filter based on name search
		if (searchTerm.length > 0) {
			// Create case insensitive pattern from search string
			const pattern = new RegExp(searchTerm, "i",) 

			res = res.filter(([id, country]) => {
				return (pattern.test(country.name))
			})
		}

		// Filter by region
		if (selectedRegion !== "all" && selectedRegion !== "placeholder") {
			res = res.filter(([id, country]) => {
				return (country.region === REGION_NAMES[selectedRegion])
			})
		}

		return res
	}

	const filteredCountries = useMemo(
		() => filterCountries(countries, search, region), 
		[countries, search, region]
	)

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
