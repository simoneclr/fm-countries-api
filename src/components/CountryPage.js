import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import CountryDetails from "./CountryDetails";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import countriesService from "../services/countriesService";

const STATUS = {
	ok: "OK",
	loading: "LOADING",
	error: "ERROR"
}

function CountryPage() {

	const [status, setStatus] = useState(STATUS.ok)

	// State variable containing data of the current country
	const [country, setCountry] = useState()

	// Retrieve url parameters
	const  params = useParams();

	// Whenever the countryId parameter changes, get country data from countriesService
	useEffect(() => {
		countriesService.getCountryById(params.countryId)
			.then(data => {
				setStatus(STATUS.loading)

				if (!data) {
					setStatus(STATUS.error)
				} else {
					setCountry(data)
					setStatus(STATUS.ok)
				}				
			})
			.catch(error => {
				console.log("An error has occurred ", error.message)
				setStatus(STATUS.error)
			})
	}, [params.countryId])

	return (
		<div className="country-page">
			<Link to="/" className="btn-link">Back</Link>

			{ (status === STATUS.loading) &&
				<LoadingPage />
			}

			{ (status === STATUS.error) &&
				<ErrorPage />
			}

			{ ((status === STATUS.ok) && country) &&
				<CountryDetails country={country}/>
			}		
		</div>
	)
}

export default CountryPage
