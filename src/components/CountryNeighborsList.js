import React, { useEffect, useState } from "react";

import countriesService from "../services/countriesService";

function CountryNeighborsList(props) {

	// State variable containing the list of neighbors names to display
	const [neighbors, setNeighbors] = useState([])

	useEffect(() => {
		props.list.forEach(n => {
			countriesService.getCountryById(n)
				.then(data => {
					setNeighbors(prevState => [...prevState, data.name])
				})
		})
	}, [props.list])

	return (
		<div className="country-neighbors">
			<span>Border Countries:</span>

			<ul>
				{neighbors.map(n => <li key={n}>{n}</li>)}
			</ul>
		</div>
	)
}

export default CountryNeighborsList
