import { beforeEach, describe, expect, it } from "vitest";
import { prisma } from "../lib/prisma";
import {
  archiveTaskInDatabase,
  createTaskInDatabase,
} from "../lib/taskService";

describe("Task database behaviour", () => {
  beforeEach(async () => {
    await prisma.task.deleteMany();
  });

  it("creates a new task with the correct default values", async () => {
    const task = await createTaskInDatabase({
      title: "Study",
      description: "Read Chapter 5",
      topic: "University",
      dueDate: new Date("2026-08-10"),
    });

    expect(task.title).toBe("Study");
    expect(task.status).toBe("Todo");
    expect(task.archived).toBe(false);

    const tasks = await prisma.task.findMany();
    expect(tasks).toHaveLength(1);
  });

  it("archives a task without deleting it", async () => {
    const task = await createTaskInDatabase({
      title: "Shopping",
      description: "Buy milk",
      topic: "Home",
      dueDate: new Date("2026-08-12"),
    });

    await archiveTaskInDatabase(task.id);

    const archivedTask = await prisma.task.findUnique({
      where: {
        id: task.id,
      },
    });

    expect(archivedTask).not.toBeNull();
    expect(archivedTask?.archived).toBe(true);
  });
});