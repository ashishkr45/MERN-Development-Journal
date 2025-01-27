import { useState } from "react";

export default function App() {
	const [ todos, setTodos ] = useState([
		{
			title: "Get you shit together",
			discription: "Complete the App",
			done: "fales"
		}
	]);

	function addTodo() {
		
	}

	return <div>
		<button onClick={addTodo}>Add Todo</button>
	</div>
}