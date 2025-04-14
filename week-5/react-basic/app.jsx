import { useState } from "react";

export default function App() {
	const [ count,  setCount ] = useState[0]; // hook: any fn starting with use it's a hook

	function onClickHandler() {
		setCount(count + 1);
	}

	return <div>
			<button id="btn" onClick={onClickHandler}></button>
		</div>;
}

function Button(props) {
	return <button onClick={onClickHandler}> Counter {count} </button>;
}