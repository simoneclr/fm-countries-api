import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import countriesService from "../services/countriesService";

const STATUS = {
	ok: "OK",
	loading: "LOADING",
	error: "ERROR"
}

function CountryNeighborsList(props) {

	const [status, setStatus] = useState(STATUS.ok)

	// State variable containing the list of neighbors names to display
	const [neighbors, setNeighbors] = useState([])

	useEffect(() => {
		setNeighbors([])
		setStatus(STATUS.loading)

		props.list.forEach(n => {
			countriesService.getCountryById(n)
				.then(data => {
					setNeighbors(prevState => [...prevState, {id: data.id, name: data.name}])
				})
				.catch(error => {
					console.log("An error has occurred ", error.message)
					setStatus(STATUS.error)
				})
		})

		setStatus(prevState => prevState === STATUS.error ? STATUS.error : STATUS.ok)
	}, [props.list])

	return (
		<div className="country-neighbors">
			<span>Border Countries:</span>

			{ (status === STATUS.loading) && 
				<span className="status-message">
					Loading neighboring Countries Info...
				</span>
			}

			{ (status === STATUS.error) && 
				<span className="status-message">
					An error occurred while loading neighboring Countries Info.
				</span>
			}

			{ (status === STATUS.ok) &&
				<ul>
					{neighbors.map(n => <li key={n.id}>
							<Link to={"/country/" + n.id} className="btn-link">{n.name}</Link>
						</li>)}
				</ul>
			}
			
		</div>
	)
}

export default CountryNeighborsList
