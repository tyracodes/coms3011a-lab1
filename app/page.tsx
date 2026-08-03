import Link from "next/link";
import TaskCard from "../components/TaskCard";
import { getActiveTasks } from "../lib/tasks";
export default async function Home() {
  const tasks = await getActiveTasks();
  return (
    <main className="min-h-screen bg-pink-100 p-10">

      <div className="mx-auto max-w-6xl rounded-3xl bg-pink-50 p-8 shadow-lg">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <p className="uppercase tracking-widest text-pink-500">
              Monday
            </p>

            <h1 className="mt-2 text-4xl font-bold text-pink-700">
              My Tasks
            </h1>

          </div>

          <Link
            href="/new-task"
            className="rounded-xl bg-pink-400 px-5 py-3 font-semibold text-white transition hover:bg-pink-500"
          >
            + New Task
          </Link>

        </div>

        {tasks.length === 0 ? (

  <div className="rounded-2xl bg-white p-6 text-center text-gray-500 shadow">

    You haven't created any tasks yet.

  </div>

) : (

  tasks.map((task) => {

    const overdue =
      task.status !== "Complete" &&
      new Date(task.dueDate) < new Date();

    return (
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
        overdue={overdue}
      />
    );

  })

)}

      </div>

    </main>
  );
}