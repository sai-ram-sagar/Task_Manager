# 📝 Task Manager App

A full-stack **Task Manager** web application that allows users to **create**, **read**, **update**, and **delete** tasks efficiently. Built with a modern tech stack for a smooth developer and user experience.

---

## 📋 Features

✅ Create tasks with:
- Title  
- Description  
- Status  
- Due Date  
- Priority

✏️ Edit tasks (only):
- Status  
- Due Date  
- Priority

🗑️ Delete tasks with confirmation.

💻 Responsive UI:
- Built with **Next.js**
- Styled using **CSS Modules**

🔗 RESTful backend API:
- Powered by **Node.js**, **Express.js**, **TypeORM**, and **PostgreSQL**

---

## 🚀 Tech Stack

| Layer       | Technology                              |
|-------------|-----------------------------------------|
| **Backend** | Node.js, Express.js, TypeORM            |
| **Database**| PostgreSQL                              |
| **Frontend**| Next.js, React Hooks, Font Awesome      |
| **Styling** | CSS Modules (`styles.css`)              |
| **Config**  | dotenv                                  |
| **CORS**    | cors (Cross-Origin Resource Sharing)    |

---


## ⚙️ Setup & Installation

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v12+)

---

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/sai-ram-sagar/Task_Manager.git
cd your-repo-name
```

### 2. Install dependencies:
   **Frontend**:
```bash
cd client
npm install
```
   **Backend**:
```bash
cd backend
npm install
```

### 3. Copy the environment file:

```bash
cp .env.example .env
```

### 4. Configure environment variables in .env:

```bash
env
NEXT_PUBLIC_BACKEND_API_URL=your_backend_url
```

### 5. Start the development :
   **Command to run both Frontend & backend**:
```bash
npm run dev
```
### Frontend will be running at: http://localhost:3000
### Backend Server will be running at: http://localhost:5000
