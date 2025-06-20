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

## 📂 Repository Structure

your-repo-name/
├── backend/
│   ├── src/
│   │   ├── entity/Task.ts
│   │   ├── index.js
│   │   └── ...
│   ├── data-source.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── pages/
    │   └── index.js
    ├── public/
    ├── styles.css
    ├── .env.local.example
    └── package.json

## ⚙️ Setup & Installation

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v12+)

---

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/<your-username>/your-repo-name.git
cd your-repo-name
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
env
NEXT_PUBLIC_BACKEND_API_URL=your_backend_url
```

5. **Start the development server**:

```bash
npm run dev
```
### Server will be running at: http://localhost:5000