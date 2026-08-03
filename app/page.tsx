import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-100 p-10">
      <div className="rounded-3xl bg-pink-50 p-8 shadow-lg">
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-pink-300 via-pink-200 to-purple-200 p-6 text-white">
          <p className="text-sm uppercase tracking-widest">
            Monday
          </p>
          <h1 className="mt-2 text-4xl font-bold">
            3 August
          </h1>
          <p className="mt-2 text-sm">
            You have 3 tasks today
          </p>
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

        <div className="mt-6">
          <TaskForm />
        </div>
      </div>
    </main>
  );
}