import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

const API_URL = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(API_URL);
        setTasks(res.data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
        alert('Failed to load tasks. Please refresh the page.');
      }
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    if(newTask !== ''){
      try {
        const res = await axios.post(API_URL, { task_name: newTask });
        setTasks([...tasks, res.data]);
        setNewTask("");
      } catch (error) {
        console.error('Failed to add task:', error);
        // You could add a user notification here, like:
        alert('Failed to add task. Please try again.');
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
      alert('Failed to delete task. Please try again.');
    }
  };

  return (
    <div className="lulu_box">
      <h2>Task Management</h2>
      <div className="input-container">
      <input
        className="lulu_input" 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter Some..."
      />
      <button onClick={addTask}>Add Task</button>
      </div>
       <div className="lulu_task_box">
       <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="task-name">{task.task_name}</span>
             <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;

