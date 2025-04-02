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
│── /frontend       (React app)
│── /backend        (Node.js + Express backend)
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
- **pgAdmin 4** (Optional for DB management)  
- **Git**  

---

## **🔹 Backend Setup (Node.js + PostgreSQL)**  
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app/backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Create a PostgreSQL Database**  
1. Open **pgAdmin 4** or **psql** CLI.  
2. Run the following SQL commands:  

```sql
CREATE DATABASE task_manager;
\c task_manager

CREATE TABLE tasks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. **Enable UUID Extension**:
```sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
```

4. **Create a trigger for auto-updating `updated_at`:**
```sql
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_timestamp
BEFORE UPDATE ON tasks
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();
```

---

### **4️⃣ Configure Environment Variables**  
Create a `.env` file inside `/backend` and update it with your PostgreSQL credentials:

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
node server.js
```
If everything is set up correctly, you should see:  
`Server running on port 5000`

---

## **🔹 Frontend Setup (React.js)**  
### **1️⃣ Navigate to the Frontend Directory**
```sh
cd ../frontend
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

## **🌍 Deployment (Optional)**
### **Frontend Deployment (Vercel/Netlify)**
- Deploy via **Vercel** → `vercel --prod`
- Deploy via **Netlify** → `netlify deploy`

### **Backend Deployment (Railway/Render)**
- Deploy via **Railway.app** → `railway up`
- Deploy via **Render.com**

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
  node server.js
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
