import { useState } from "react"

import { REGION_NAMES } from "../util/regions"

// Displays a custom Select Menu allowing the user to limit their search to a specific region
function RegionListbox ({value, handleChange}) {

	// Controls wether the options are visible or not
	const [open, setOpen] = useState(false)

	const toggleMenu = () => {
		setOpen(prevState => !prevState)
	}

	// Given a region id, returns a function that sets that regionId as the selected option,
	// To be used as a click handler on option items
	const getOptionClickHandler = (regionId) => () => {
		setOpen(false)
		handleChange(regionId)	
	}

	return (
		<div className="Listbox">
			<button className="listbox-button" onClick={toggleMenu}>
				{value === "placeholder" ? "Filter by Region" : REGION_NAMES[value]}
			</button>

			<ul className={(open ? "open" : "closed") + " listbox-options"}>
				{
					Object.keys(REGION_NAMES).map(regionId =>
						<Item key={regionId} value={regionId} selected={regionId === value}
							handleClick={getOptionClickHandler(regionId)}
						>
							{REGION_NAMES[regionId]}
						</Item>
					)
				}
			</ul>
		</div>
	)
}

const Item = ({children, disabled, selected, handleClick}) => {
	return (
		<li onClick={(handleClick)}>
			{children}
		</li>
	)
}

export default RegionListbox
