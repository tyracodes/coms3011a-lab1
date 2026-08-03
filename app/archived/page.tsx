import Link from "next/link";
import { getArchivedTasks } from "@/lib/tasks";
import TaskCard from "@/components/TaskCard";

export default async function ArchivedPage() {
  const tasks = await getArchivedTasks();

  return (
    <main className="min-h-screen bg-pink-100 p-10">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">

          <h1 className="text-4xl font-bold text-pink-700">
            Archived Tasks
          </h1>

          <Link
            href="/"
            className="rounded-xl bg-pink-400 px-6 py-3 font-semibold text-white hover:bg-pink-500"
          >
            Back to Tasks
          </Link>

        </div>

        {tasks.length === 0 ? (

          <div className="rounded-2xl bg-white p-6 text-center shadow">
            No archived tasks.
          </div>

        ) : (

          <div className="space-y-6">

            {tasks.map((task) => (

              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                topic={task.topic}
                dueDate={task.dueDate}
                status={
                  task.status as
                    | "Todo"
                    | "In Progress"
                    | "Complete"
                }
                overdue={false}
              />

            ))}

          </div>

        )}

      </div>

    </main>
  );
}