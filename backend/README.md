# 🖥️ Backend – Task Manager API

This is the backend API for the **Task Manager App**, built using **Node.js**, **Express.js**, **TypeORM**, and **PostgreSQL**.

It provides RESTful endpoints for creating, reading, updating, and deleting tasks.

---

## ⚙️ Setup & Installation

### ✅ Prerequisites

Ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v12+)

---

### 📦 Getting Started

1. **Clone the repository and navigate to the backend folder**:

```bash
git clone https://github.com/<your-username>/your-repo-name.git
cd your-repo-name/backend
```

2. **Install dependencies**:

```bash
npm install
```

3. **Copy the environment file**:

```bash
cp .env.example .env
```

4. **Configure environment variables in .env**:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=task_manager_db
```

5. **Start the development server**:

```bash
npm run dev
```
### Server will be running at: http://localhost:5000