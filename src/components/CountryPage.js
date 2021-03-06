import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import CountryDetails from "./CountryDetails";

import countriesService from "../services/countriesService";

function CountryPage() {

	// State variable containing data of the current country
	const [country, setCountry] = useState()

	// Retrieve url parameters
	const  params = useParams();

	// Whenever the countryId parameter changes, get country data from countriesService
	useEffect(() => {
		countriesService.getCountryById(params.countryId)
			.then(data => {
				setCountry(data)
			})
			.catch(console.error)
	}, [params.countryId])

	return (
		<div className="country-page">
			<Link to="/" className="btn-link">Back</Link>

			{country ? <CountryDetails country={country}/> : "Loading..."}			
		</div>
	)
}

export default CountryPage
