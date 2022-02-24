import React, { useState, useEffect } from "react";

import CountriesList from "./CountriesList";

import countriesService from "../services/countriesService";

// Component that displays the dashboard with all countries
function CountriesDashboard() {
	// State variable containing the list of available countries
	let [countries, setCountries] = useState(new Map())

	// When mounting the component, retrieve the list of available countries
	useEffect(()=> {
    countriesService.getAll()
      .then(data => {
				setCountries(data)
      })
      .catch(console.error)
  }, [])

	return (
		<section className="dashboard">
			<CountriesList countries={countries}/>
		</section>
	)
}

export default CountriesDashboard
