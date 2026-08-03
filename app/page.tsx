import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-pink-100 p-10">

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

      <div className="rounded-3xl bg-pink-50 p-8 shadow-lg">

  <p className="text-sm uppercase tracking-widest text-pink-500">
    Today
  </p>

  <h1 className="mb-8 mt-2 text-4xl font-bold text-pink-700">

    My Tasks

  </h1>

  <TaskCard
    title="Study COMS3011A"
    topic="University"
    dueDate="4 August 2026"
    status="Todo"
  />

  <TaskCard
    title="Complete Lab 1"
    topic="Programming"
    dueDate="5 August 2026"
    status="In Progress"
  />

  <TaskCard
    title="Read Notes"
    topic="Revision"
    dueDate="7 August 2026"
    status="Complete"
  />

</div>  

        <TaskForm />

      </div>

    </main>
  );
}