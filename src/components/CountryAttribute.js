import React from "react";

// Component that displays an attribute of a country
function CountryAttribute(props) {
	return <p className="country-attribute"><span>{props.name}:</span> {props.value}</p>
}

export default CountryAttribute