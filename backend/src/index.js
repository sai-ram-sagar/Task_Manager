const express = require("express");
const { AppDataSource } = require("../data-source");
const TaskEntity = require("./entity/Task");
require("dotenv").config();
const cors = require("cors");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to DB and start server
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected ✅");

    const taskRepository = AppDataSource.getRepository("Task");

    // Routes
    app.get("/tasks", async (req, res) => {
      const tasks = await taskRepository.find();
      res.json(tasks);
    });

    app.post("/tasks", async (req, res) => {
      const newTask = taskRepository.create(req.body);
      const result = await taskRepository.save(newTask);
      res.json(result);
    });

    app.put("/tasks/:id", async (req, res) => {
      const { id } = req.params;
      await taskRepository.update(id, req.body);
      const updatedTask = await taskRepository.findOneBy({ id });
      res.json(updatedTask);
    });

    app.delete("/tasks/:id", async (req, res) => {
      const { id } = req.params;
      await taskRepository.delete(id);
      res.json({ message: "Task deleted" });
    });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
