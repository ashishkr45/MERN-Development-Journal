let todo = [];

function state() {
	const input = document.querySelector("input").value;
	if (input.trim() === "") {
		alert("Please enter a task!");
		return;
	}
	todo.push({
		title: input
	});
	document.querySelector("input").value = "";
	render();
}

function Component(currTodo, idx) {
	const inp = document.createElement("input");
	inp.type = "checkbox"; 

	const disp = document.createElement("span");
	disp.textContent = currTodo.title;

	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.onclick = function () {
		delFn(idx);
	};

	const li = document.createElement("li");
	li.appendChild(inp);
	li.appendChild(disp);
	li.appendChild(deleteBtn);

	return li;
}

function render() {
	document.getElementById("taskList").innerHTML = "";
	for(let i = 0; i < todo.length; i++) {
		const dispTask = Component(todo[i], i);
		const taskList = document.getElementById("taskList");
		taskList.append(dispTask);
	}
}

// function delFn(button) {
//   button.parentElement.remove();
// }


function delFn(index) {
	todo.splice(index, 1);
	render();
}