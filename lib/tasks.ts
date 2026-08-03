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