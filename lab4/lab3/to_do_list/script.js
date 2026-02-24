const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

function createTodoItem(text) {
  // <li class="todo">
  const li = document.createElement("li");
  li.className = "todo";

  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.type = "button";
  delBtn.textContent = "Delete";

  label.appendChild(checkbox);
  label.appendChild(span);
  li.appendChild(label);
  li.appendChild(delBtn);

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  delBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  return li;
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const item = createTodoItem(text);
  list.appendChild(item);

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});
