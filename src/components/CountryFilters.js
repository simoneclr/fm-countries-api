import React from "react";

import { ReactComponent as IconSearch } from "../assets/svgs/magnifying-glass-solid.svg"
import { ReactComponent as IconClose } from "../assets/svgs/xmark-solid.svg"

import RegionListbox from "./RegionListbox";

function CountryFilters({search, updateSearch, region, updateRegion}) {

	// Function that handles the change of the controls
	const handleSearchChange = (e) => {
		updateSearch(e.target.value)
	}

	const handleCancelClick = (e) => {
		updateSearch("")
	}

	// Handle the change of selected regions
	const hadnleRegionChange = (value) => {
		updateRegion(value)
	}

	return (
		<div className="filters-menu">
			<label className="filter-element search-bar">				
				<input type="text" name="name-search" value={search} onChange={handleSearchChange}
							placeholder="Search for a Country..."/>

				<IconSearch className="icon icon-search" />

				{ search.length > 0 &&
					<button className="btn-icon" onClick={handleCancelClick}>
						<IconClose className="icon icon-cancel" />
					</button>
				}
				
			</label>

			<RegionListbox value={region} handleChange={hadnleRegionChange} />
		</div>
	)
}

export default CountryFilters
