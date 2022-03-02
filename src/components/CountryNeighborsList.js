import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import countriesService from "../services/countriesService";

function CountryNeighborsList(props) {

	// State variable containing the list of neighbors names to display
	const [neighbors, setNeighbors] = useState([])

	useEffect(() => {
		setNeighbors([])

		props.list.forEach(n => {
			countriesService.getCountryById(n)
				.then(data => {
					setNeighbors(prevState => [...prevState, {id: data.id, name: data.name}])
				})
		})
	}, [props.list])

	return (
		<div className="country-neighbors">
			<span>Border Countries:</span>

			<ul>
				{neighbors.map(n => <li key={n.id}>
						<Link to={"/country/" + n.id} className="btn-link">{n.name}</Link>
					</li>)}
			</ul>
		</div>
	)
}

export default CountryNeighborsList
