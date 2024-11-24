// DOM Elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Event Listeners
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleListActions);

// Add a new to-do item
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === '') {
    alert('Please enter a to-do!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('todo-checkbox');

  const text = document.createElement('span');
  text.textContent = todoText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Clear input field
  todoInput.value = '';
}

// Handle checkbox and delete actions
function handleListActions(e) {
  if (e.target.type === 'checkbox') {
    const li = e.target.closest('li');
    li.classList.toggle('completed');
    li.style.transition = 'all 0.3s';
    todoList.appendChild(li); // Move to the bottom
  }

  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.closest('li');
    li.style.transition = 'opacity 0.5s';
    li.style.opacity = 0;
    setTimeout(() => li.remove(), 500); // Smooth fade-out
  }
}
