import data from "./Todos.js";

const Tasks = document.querySelector(".todoTasks");
const displayTodos = () => {
  Tasks.innerHTML = "";
  data.forEach((todo) => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
      <input type='checkbox' ${todo.completed ? "checked" : ""}>
      <span class='description'>${todo.description}</span>
       <i class='fa-solid fa-ellipsis-vertical'></i>
    `;
    Tasks.appendChild(task);
  });
};

export default displayTodos;
