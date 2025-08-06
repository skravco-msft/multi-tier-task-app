from flask import Flask, request, jsonify
from models import init_db, add_task, get_tasks
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
init_db()

@app.route('/tasks', methods=['GET'])
def tasks():
    return jsonify(get_tasks())

@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    if 'title' not in data:
        return jsonify({'error': 'Title is required'}), 400
    add_task(data['title'])
    return jsonify({'message': 'Task added'}), 201

if __name__ == '__main__':
    app.run(debug=True)
