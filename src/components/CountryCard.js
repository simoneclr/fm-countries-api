import React from "react";

import CountryAttribute from "./CountryAttribute";

// Component that displays a country's card in the dashboard
function CountryCard(props) {
	return (
		<div className="country-card">
			<div className="country-thumbnail">
				<img src={props.country.flag} alt={"The flag of " + props.country.name} />
			</div>

			<div className="country-info">
				<h3 className="country-name">{props.country.name}</h3>

				<CountryAttribute name="Population" value={props.country.population}/>
				<CountryAttribute name="Region" value={props.country.region}/>
				<CountryAttribute name="Capital" value={props.country.capital}/>
			</div>
		</div>
	)
}

export default CountryCard