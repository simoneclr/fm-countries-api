import React, { useState } from "react";

function CountryFilters(props) {

	// State variable that holds the value for the search bar
	const [search, setSearch] = useState("");

	// Function that handles the change of the controls
	const handleChange = (e) => {
		setSearch(e.target.value)
	}


	// Function that handles the submission of the search bar
	const handleSubmit = (e) => {
		e.preventDefault();
		
		props.updateSearch(search)
	}

	return (
		<div className="filters-menu">
			<form onSubmit={handleSubmit}>
				<input type="text" name="name-search" value={search} onChange={handleChange}/>
			</form>
		</div>
	)
}

export default CountryFilters
