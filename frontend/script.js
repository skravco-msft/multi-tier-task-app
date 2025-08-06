async function fetchTasks() {
  const response = await fetch('http://127.0.0.1:5000/tasks');
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

  await fetch('http://127.0.0.1:5000/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  input.value = '';
  fetchTasks();
}

window.onload = fetchTasks;
