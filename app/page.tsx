import Link from "next/link";
import TaskCard from "../components/TaskCard";

export default function Home() {
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

        <TaskCard
          title="Study COMS3011A"
          topic="University"
          dueDate="4 August 2026"
          status="Todo"
        />

        <TaskCard
          title="Complete Lab Report"
          topic="Programming"
          dueDate="1 August 2026"
          status="In Progress"
          overdue
        />

        <TaskCard
          title="Read Database Notes"
          topic="Revision"
          dueDate="6 August 2026"
          status="Complete"
        />

      </div>

    </main>
  );
}