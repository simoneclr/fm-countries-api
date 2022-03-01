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
		<ul className="country-neighbors">
			{neighbors.map(n => <li key={n}>{n}</li>)}
		</ul>
	)
}

export default CountryNeighborsList
