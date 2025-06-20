// backend/entity/Task.js
const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    title: {
      type: "varchar",
      nullable: false,
    },
    description: {
      type: "text",
      nullable: true,
    },
    status: {
      type: "enum",
      enum: ["pending", "processing", "completed"],
      default: "pending",
    },
    dueDate: {
      type: "date",
      nullable: true,
    },
    priority: {
      type: "enum",
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
