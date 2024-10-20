

let todoList = [];

function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();

  if (task) {
    todoList.push(task);
    input.value = '';
    renderTodoList();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function renderTodoList() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';

  todoList.forEach((task, index) => {
    list.innerHTML += `
      <li class="flex justify-between items-center p-4">
        <span>${task}</span>
        <button onclick="deleteTodo(${index})" class="text-red-500 hover:text-red-600">Delete</button>
      </li>
    `;
  });
}
