'use client';
import { useEffect, useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
console.log(API_URL)

export default function Home() {
  const [tasks, setTasks] = useState([]);

    const todayStr = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: todayStr,
    priority: 'medium',
  });
  const [errors, setErrors] = useState({ title: '', dueDate: '' });
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({ status: '', dueDate: '', priority: '' });

  // load tasks
  useEffect(() => {
    fetch(`${API_URL}`)
      .then((r) => r.json())
      .then(setTasks);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = { title: '', dueDate: '' };
    if (!form.title.trim()) newErrors.title = 'Title is required.';
    setErrors(newErrors);
    return !newErrors.title && !newErrors.dueDate;
  };

  const handleAdd = async () => {
    if (!validate()) return;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const added = await res.json();
    setTasks((ts) => [...ts, added]);
    setForm({ title: '', description: '', status: 'pending', dueDate: todayStr, priority: 'medium' });
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditFields({
      status: task.status,
      dueDate: task.dueDate?.split('T')[0] || '',
      priority: task.priority,
    });
  };

  const handleUpdate = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editFields),
    });
    const updated = await res.json();
    setTasks((ts) => ts.map((t) => (t.id === id ? updated : t)));
    setEditingId(null);
  };

const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setTasks((ts) => ts.filter((t) => t.id !== id));
  };

  return (
    <main className="container">
      <h1 className="heading">Task Manager</h1>

      {/* Add Task */}
      <div className="add-task">
        <input
          name="title"
          type="text"
          placeholder="Title *"
          value={form.title}
          onChange={handleFormChange}
          className="add-form-task-title"
        />
        {errors.title && <div className="error-message">{errors.title}</div>}

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleFormChange}
        />

        <div className="form-dropdowns">
          <select name="status" value={form.status} onChange={handleFormChange}>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>
            <input
            name="dueDate"
            type="date"
            value={form.dueDate}
            onChange={handleFormChange}
          />
          
          <select name="priority" value={form.priority} onChange={handleFormChange}>
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>

        

        <button onClick={handleAdd}>Add Task</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-card">
            {editingId === task.id ? (
              <div className="edit-card">
                {/* Read‑only Title */}
                <p style={{textAlign:'center', fontWeight:'bold', fontSize:'1rem'}}>{task.title}</p>

                {/* Editable fields */}
                <div className="edit-controls">
                  <select
                    name="status"
                    value={editFields.status}
                    onChange={(e) => setEditFields((f) => ({ ...f, status: e.target.value }))}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                  </select>
                  <input
                    name="dueDate"
                    type="date"
                    value={editFields.dueDate}
                    onChange={(e) => setEditFields((f) => ({ ...f, dueDate: e.target.value }))}
                  />
                  <select
                    name="priority"
                    value={editFields.priority}
                    onChange={(e) => setEditFields((f) => ({ ...f, priority: e.target.value }))}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="edit-actions">
                  <button onClick={() => handleUpdate(task.id)}>Save</button>
                  <button onClick={() => setEditingId(null)} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="task-title">{task.title}</h2>
                  <p className="task-desc">{task.description}</p>
                  <div className="meta">
                    <span className={`badge ${task.status}`}>{task.status}</span>
                    <span className="due">Due: {task.dueDate?.split('T')[0]}</span>
                    <span className={`badge priority ${task.priority}`}>{task.priority}</span>
                  </div>
                </div>
                <div className="actions">
                  <button onClick={() => startEdit(task)} title="Edit">
                    <FontAwesomeIcon icon={faPencilAlt} size="lg" className="icon-blue" />
                  </button>
                  <button onClick={() => handleDelete(task.id)} title="Delete">
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" className="icon-red" />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}