"use server";

import { prisma } from "../../lib/prisma";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const topic = formData.get("topic");
  const dueDate = formData.get("dueDate");

  console.log({
    title,
    description,
    topic,
    dueDate,
  });

  if (!title || !description || !topic || !dueDate) {
    throw new Error("Please complete all fields.");
  }

  await prisma.task.create({
    data: {
      title: title.toString(),
      description: description.toString(),
      topic: topic.toString(),
      dueDate: new Date(dueDate.toString()),
      status: "Todo",
    },
  });

  redirect("/");
}