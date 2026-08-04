import { prisma } from "./prisma";

export async function createTaskInDatabase(data: {
  title: string;
  description: string;
  topic: string;
  dueDate: Date;
}) {
  return prisma.task.create({
    data: {
      ...data,
      status: "Todo",
      archived: false,
    },
  });
}

export async function archiveTaskInDatabase(id: number) {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      archived: true,
    },
  });
}