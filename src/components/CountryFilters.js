import React, { useState } from "react";

function CountryFilters(props) {

	// State variable that holds the value for the search bar
	const [search, setSearch] = useState("");

	// Function that handles the change of the controls
	const handleChange = (e) => {
		if (e.target.type == "text") {
			// If the event is triggered by the text box, update the search state variable
			setSearch(e.target.value)
		} else {
			// If the event is triggered by the select, update the region state variable
			props.updateRegion(e.target.value)
		}
	}

	// Function that handles the submission of the search bar
	const handleSubmit = (e) => {
		e.preventDefault();
		
		props.updateSearch(search)
	}

	return (
		<div className="filters-menu">
			<form onSubmit={handleSubmit}>
				<label className="filter-element search-bar">
					<input type="text" name="name-search" value={search} onChange={handleChange}
										placeholder="Search for a Country..."/>
										
					<button type="submit" className="btn-icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							{/*
							Font Awesome Free 5.15.0 by @fontawesome - https://fontawesome.com
							License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
							*/}
							<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
						</svg>
					</button>
				</label>
			</form>

			<select name="region" value={props.region} onChange={handleChange} 
				className="filter-element region-select">
				<option value="placeholder" disabled>Filter by Region</option>
				<option value="all">All Regions</option>
				<option value="africa">Africa</option>
				<option value="americas">America</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</div>
	)
}

export default CountryFilters
