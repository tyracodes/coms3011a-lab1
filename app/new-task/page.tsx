import Link from "next/link";
import TaskForm from "../../components/TaskForm";

export default function NewTaskPage() {
  return (
    <main className="min-h-screen bg-pink-100 p-10">

      <div className="mx-auto max-w-3xl">

        <Link
          href="/"
          className="mb-6 inline-block rounded-xl bg-white px-5 py-2 text-pink-700 shadow hover:bg-pink-50"
        >
          ← Back to Tasks
        </Link>

        <TaskForm />

      </div>

    </main>
  );
}