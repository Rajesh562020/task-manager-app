### **📌 README.md – Task Management App**  

---

# **Task Management App**  
A full-stack task management application built with **React (frontend)**, **Node.js + Express (backend)**, and **PostgreSQL (database)**. This application allows users to **add, view, and delete tasks** while simulating AWS Lambda locally.  

---

## **🚀 Features**  
✅ Add new tasks  
✅ View all tasks  
✅ Delete tasks  
✅ PostgreSQL database integration  
✅ Local AWS Lambda function simulation  

---

## **📂 Project Structure**  
```
/task-manager-app
│── /task-maker-ui       (React app)
│── /task_maker_server        (Node.js + Express backend)
│   │── /lambda     (Local AWS Lambda functions)
│   │   │── addTask.js
│   │   │── deleteTask.js
│   │   │── db.js
│   │── .env
│   │── server.js
│   │── package.json
│── README.md
```

---

## **🛠️ Prerequisites**  
- **Node.js** (v18+)  
- **PostgreSQL** (Installed and running)  
- **pgAdmin 4** (for DB management)  
- **Git**  

---

## **🔹 Backend Setup (Node.js + PostgreSQL)**  
### **1️⃣ Clone the Repository**
```sh
git clone -b master https://github.com/Rajesh562020/task-manager-app.git
cd task-manager-app/task_maker_server
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Create a PostgreSQL Database**  
1. Open **pgAdmin 4** or **psql** CLI.  
2. Run the following SQL commands:  

```sql
CREATE DATABASE task-manager;
\c task-manager

CREATE TABLE tasks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### **4️⃣ Configure Environment Variables**  
Create a `.env` file inside `/task_maker_server` and update it with your PostgreSQL credentials:

```
PG_HOST=localhost
PG_PORT=5432
PG_USER=your_username
PG_PASSWORD=your_password
PG_DATABASE=task_manager
```

---

### **5️⃣ Start the Backend Server**
```sh
node index.js
```
If everything is set up correctly, you should see:  
`Server running on port 5000`

---

## **🔹 Frontend Setup (React.js)**  
### **1️⃣ Navigate to the Frontend Directory**
```sh
cd ../task-maker-ui
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Update API Endpoint**  
Inside `frontend/src/App.js`, update the backend API URL:
```javascript
const API_URL = "http://localhost:5000/tasks";
```

### **4️⃣ Start the React App**
```sh
npm start
```
This will open the frontend at **http://localhost:3000**.

---

## **🛠️ Running the Application**
| Action        | Method | API Endpoint |
|--------------|--------|--------------|
| Get all tasks | `GET`  | `/tasks`      |
| Add a task   | `POST` | `/tasks`      |
| Delete a task | `DELETE` | `/tasks/:id`  |

### **Example cURL Requests**
**Add a Task**
```sh
curl -X POST "http://localhost:5000/tasks" \
     -H "Content-Type: application/json" \
     -d '{"task_name": "Write documentation"}'
```

**Delete a Task**
```sh
curl -X DELETE "http://localhost:5000/tasks/your-task-id"
```

---

## **❓ Troubleshooting**
**1️⃣ PostgreSQL connection error?**  
- Ensure the database is running:  
  ```sh
  sudo systemctl start postgresql
  ```
- Verify credentials in `.env`.  

**2️⃣ Backend not responding?**  
- Restart the server:  
  ```sh
  node index.js
  ```

**3️⃣ Frontend not fetching data?**  
- Check the API URL in `App.js`.  

---

## **📜 License**
This project is open-source under the **MIT License**.  

---

## **🤝 Contributing**
Feel free to submit issues or pull requests! 🚀  

---

Now your **README is complete** and **ready for GitHub**! Let me know if you need any tweaks. 🚀🔥
