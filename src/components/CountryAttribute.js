import React from "react";

// Component that displays an attribute of a country
function CountryAttribute(props) {
	let display = ""

	if (Array.isArray(props.value)) {
		display = props.value.join(", ")
	} else {
		display = props.value
	}

	return <p className="country-attribute"><span>{props.name}:</span> {display}</p>
}

export default CountryAttribute
