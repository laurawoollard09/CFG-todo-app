console.log("hiya");

// document.querySelector("#submitButton")
//         .addEventListener("click", () => {
//     console.log("Clicked")
//     console.log(inputToDoElement.value)
// });

const tasks = [];
// {title: "", completed: boolean}

function renderToDos() {
  const toDoListElement = document.querySelector("#todoList");

  toDoListElement.innerHTML = "";

  tasks.forEach((task, index) => {
    const listElement = document.createElement("li");
    listElement.innerHTML = `
                <p>${task.title}</p>
                <p>${task.completed ? "Completed" : "Pending"}</p>
                <button onclick="deleteToDo(${index})">Delete</button>
                <button onclick="toggleTodo(${index})">Toggle</button>
            `;
    toDoListElement.appendChild(listElement);
  });
}

function addToDo() {
  const inputToDoElement = document.querySelector("#inputToDo");
  const title = inputToDoElement.value;
  tasks.push({ title, completed: false });

  renderToDos();

  console.log(tasks);
}

function deleteToDo(index) {
  tasks.splice(index, 1);
  renderToDos();
}

function toggleTodo(index) {
  tasks[index].completed = !tasks[index].completed;
  renderToDos();
}
