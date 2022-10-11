import { ReactComponent as FrownIcon } from "../assets/svgs/face-frown-regular.svg"

// Displays a generic error message when an error occurs
function ErrorPage() {
	return (
		<div className="ErrorPage">
			<FrownIcon className="error-icon" />

			<p className="error-message">
				Oh No! Something went wrong.
			</p>

			<p className="error-submessage">
				Please refresh the page to try again.
			</p>
		</div>
	)
}

export default ErrorPage
