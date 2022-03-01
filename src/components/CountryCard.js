import React from "react";
import { Link } from "react-router-dom";

import CountryAttribute from "./CountryAttribute";

// Component that displays a country's card in the dashboard
function CountryCard(props) {
	return (
		<div className="country-card">
			<div className="country-thumbnail">
				<img src={props.country.flag} alt={"The flag of " + props.country.name} />
			</div>

			<div className="country-info">
				<Link to={"/country/" + props.country.id} className="country-name">
					{props.country.name}
				</Link>

				<CountryAttribute name="Population" value={props.country.population}/>
				<CountryAttribute name="Region" value={props.country.region}/>
				<CountryAttribute name="Capital" value={props.country.capital}/>
			</div>
		</div>
	)
}

export default CountryCard