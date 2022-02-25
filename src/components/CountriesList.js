import React from "react";
import CountryCard from "./CountryCard";

// Compoent that displays the list of countries
function CountriesList(props) {
	return (
		<div className="countries-list">
			{props.countries.map(([id, country]) => 
				<CountryCard key={id} country={country}/>
			)}
		</div>
	)
}

export default CountriesList
