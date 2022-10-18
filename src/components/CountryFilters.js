import React from "react";

import { ReactComponent as IconSearch } from "../assets/svgs/magnifying-glass-solid.svg"
import { ReactComponent as IconClose } from "../assets/svgs/xmark-solid.svg"

function CountryFilters({search, updateSearch, region, updateRegion}) {

	// Function that handles the change of the controls
	const handleChange = (e) => {
		if (e.target.type === "text") {
			// If the event is triggered by the text box, update the search state variable
			updateSearch(e.target.value)
		} else {
			// If the event is triggered by the select, update the region state variable
			updateRegion(e.target.value)
		}
	}

	const handleCancelClick = (e) => {
		updateSearch("")
	}

	return (
		<div className="filters-menu">
			<label className="filter-element search-bar">				
				<input type="text" name="name-search" value={search} onChange={handleChange}
							placeholder="Search for a Country..."/>

				<IconSearch className="icon icon-search" />

				{ search.length > 0 &&
					<button className="btn-icon" onClick={handleCancelClick}>
						<IconClose className="icon icon-cancel" />
					</button>
				}
				
			</label>

			<select name="region" value={region} onChange={handleChange} 
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
