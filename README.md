# 📝 Multi-Tier Task App

A basic multi-tier architecture project using Flask (backend), SQLite (data), and plain HTML/JS (frontend).

---

## 🧱 Architecture

- **Frontend**: `index.html` with vanilla JavaScript
- **Backend**: Python Flask API
- **Database**: SQLite

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd <repo-folder>
````

### 2. Setup and Run Backend (with Docker)

Make sure you have [Docker](https://www.docker.com/get-started) installed.

Build the Docker image:

```bash
docker build -t flask-backend ./backend
```

Run the Docker container:

```bash
docker run -p 5000:5000 flask-backend
```

The backend API will be accessible at `http://localhost:5000`.

### 3. Open Frontend

Simply open `frontend/index.html` in your browser.

---

## 🛠️ Features

* Add a task
* View tasks
* Simple 3-tier structure: Frontend, Backend, and Database

---

## ⚙️ Notes

* The backend uses SQLite (`database.db`) as a lightweight database.
* The Flask app runs on port 5000 inside the container and is exposed to the host on the same port.
* You can extend the Docker setup with Docker Compose if you want to containerize the frontend or add other services.

