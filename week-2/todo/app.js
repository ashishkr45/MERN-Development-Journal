function addFn() {
  const newTaskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (newTaskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const task = document.createElement("li");

  // Create a checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create the task display
  const display = document.createElement("span");
  display.textContent = newTaskInput.value;

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.onclick = function () {
    delFn(this);
  };

  // Append all elements to the task item
  task.appendChild(checkbox);
  task.appendChild(display);
  task.appendChild(deleteBtn);

  // Append the task item to the list
  taskList.appendChild(task);

  // Clear the input field
  newTaskInput.value = "";
}

function delFn(button) {
  const task = button.parentElement;
  task.remove();
}