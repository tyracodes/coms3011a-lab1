import { getTaskById } from "@/lib/tasks";
import { notFound } from "next/navigation";
import { updateTask } from "@/app/actions/taskActions";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTaskPage({ params }: Props) {
  const { id } = await params;

  const task = await getTaskById(Number(id));

  if (!task) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-pink-100 p-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-pink-700">
          Edit Task
        </h1>

        <form action={updateTask} className="space-y-6">
          <input
            type="hidden"
            name="id"
            value={task.id}
          />

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Task Name
            </label>

            <input
              name="title"
              defaultValue={task.title}
              type="text"
              required
              className="w-full rounded-xl border border-pink-200 p-3 focus:border-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              defaultValue={task.description}
              rows={4}
              required
              className="w-full rounded-xl border border-pink-200 p-3 focus:border-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Topic
            </label>

            <input
              name="topic"
              defaultValue={task.topic}
              type="text"
              required
              className="w-full rounded-xl border border-pink-200 p-3 focus:border-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Due Date
            </label>

            <input
              name="dueDate"
              defaultValue={task.dueDate.toISOString().split("T")[0]}
              type="date"
              required
              className="w-full rounded-xl border border-pink-200 p-3 focus:border-pink-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              defaultValue={task.status}
              className="w-full rounded-xl border border-pink-200 p-3 focus:border-pink-400 focus:outline-none"
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-pink-400 py-3 font-semibold text-white"
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}