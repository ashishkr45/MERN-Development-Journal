import { useRef } from 'react';

function debounce(ogFunction) {
	const currentClock = useRef();

	return () => {
		clearTimeout(currentClock.current);
		currentClock.current = setTimeout(ogFunction, 200);
	}
}
export default debounce;