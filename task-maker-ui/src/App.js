import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

const API_URL = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => 
    {
      console.log(">>>>",res)
      setTasks(res.data);
 
    }
    
    );
  }, []);

  const addTask = async () => {
    if(newTask !== ''){
      const res = await axios.post(API_URL, { task_name: newTask });
      setTasks([...tasks, res.data]);
      setNewTask("");
    }
    
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
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

