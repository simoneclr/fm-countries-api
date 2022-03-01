import React from "react";

import { Link, useParams } from "react-router-dom";

function CountryDetails() {
	let params = useParams();

	return (
		<div>
			<Link to="/">Back</Link>
			<br />
			{params.countryId}
		</div>
	)
}

export default CountryDetails