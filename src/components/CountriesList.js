import React from "react";

// Compoent that displays the list of countries
function CountriesList(props) {
	return (
		<ul className="countries-list">
			{Array.from(props.countries).map(([key, value]) => {
				return <li key={key}>{value.name}</li>
			})}
		</ul>
	)
}

export default CountriesList
