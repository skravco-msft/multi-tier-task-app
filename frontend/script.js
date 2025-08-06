const API_URL = 'http://localhost:5000';

async function fetchTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  const tasks = await response.json();
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('task-input');
  const title = input.value;
  if (!title) return;

  await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  input.value = '';
  fetchTasks();
}

window.onload = fetchTasks;

