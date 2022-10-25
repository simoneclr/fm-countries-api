import { useEffect } from "react"

// Perform some action when clicking outside a cerain element
// https://usehooks.com/useOnClickOutside/
function useOnClickOutside (ref, handler) {
	useEffect(() => {
		const listener = (event) => {
			// If an element is not the ref's element, or one of its descendants, call handler
			if (ref.current && !ref.current.contains(event.target)) {
				handler(event)
			}
		}

		document.addEventListener("click", listener)

		// Cleanup: Remove event listener
		return () => {
			document.removeEventListener("click", listener)
		}
	}, [ref, handler])
}

export default useOnClickOutside
