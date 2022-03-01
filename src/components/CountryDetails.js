import React from "react";

import CountryAttribute from "./CountryAttribute";
import CountryNeighborsList from "./CountryNeighborsList";

function CountryDetails(props) {

	let country = props.country

	return (
		<div className="country-details">
			<div className="country-flag">
				<img src={country.flag} alt={"The flag of " + props.country.name}/>
			</div>

			<div className="country-info">
				<h2 className="country-name">{country.name}</h2>

				<div className="country-attributes">
					<div className="first">
						<CountryAttribute name="Native Name" value={country.nativeName}/>
						<CountryAttribute name="Population" value={country.population}/>
						<CountryAttribute name="Region" value={country.region}/>
						<CountryAttribute name="Sub Region" value={country.subRegion}/>
						<CountryAttribute name="Capital" value={country.capital}/>
					</div>

					<div className="second">
						<CountryAttribute name="Top Level Domain" value={country.domain}/>
						<CountryAttribute name="Currencies" value={country.currencies}/>
						<CountryAttribute name="Languages" value={country.languages}/>
					</div>
				</div>

				<CountryNeighborsList list={country.neighbors}/>			
			</div>
		</div>
	)
}

export default CountryDetails
