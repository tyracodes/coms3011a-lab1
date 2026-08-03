import { prisma } from "./prisma";

export async function getActiveTasks() {
  return prisma.task.findMany({
    where: {
      archived: false,
    },
    orderBy: {
      createdAt: "desc",
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