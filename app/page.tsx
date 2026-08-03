import TaskForm from "../components/TaskForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-100 p-10">

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

        <div className="rounded-3xl bg-pink-50 p-8 shadow-lg">

          <h1 className="mb-6 text-4xl font-bold text-pink-700">
            My Tasks
          </h1>

          <div className="rounded-2xl bg-white p-6 text-gray-500 shadow">

            No tasks yet.

          </div>

        </div>

        <TaskForm />

      </div>

    </main>
  );
}