function addTodo() {
	const inputEl = document.querySelector("input");
	const val = inputEl.value;
	const loca = document.createElement("li");
	loca.textContent = val;

	document.getElementById("list").append(loca);
	inputEl.value = "";
}
		
function startTime() {
	const change = document.getElementById("stime");
			
	let s = 0;
	function callBack() {
		change.innerHTML = s;
			s++;
		}

	setInterval(callBack, 1000);
 	time.value = "";
}