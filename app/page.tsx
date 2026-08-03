export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-6 text-4xl font-bold">
          My Todo Application
        </h1>

        <button className="mb-8 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          + Add Task
        </button>

        <div className="rounded-lg border bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-semibold">
            Tasks
          </h2>

          <p className="text-gray-500">
            No tasks have been added yet.
          </p>
        </div>

      </div>
    </main>
  );
}