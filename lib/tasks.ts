import { prisma } from "./prisma";

export async function getActiveTasks(
  sortBy: "dueDate" | "topic" | "status" = "dueDate"
) {
  return prisma.task.findMany({
    where: {
      archived: false,
    },
    orderBy: {
      [sortBy]: "asc",
    },
  });
}

export async function getTaskById(id: number) {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
}

export async function getArchivedTasks() {
  return prisma.task.findMany({
    where: {
      archived: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}