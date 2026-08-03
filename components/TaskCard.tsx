import Link from "next/link";
import { archiveTask } from "@/app/actions/taskActions";

type TaskCardProps = {
  id: number;
  title: string;
  topic: string;
  dueDate: Date;
  status: "Todo" | "In Progress" | "Complete";
  overdue?: boolean;
};

export default function TaskCard({
  id,
  title,
  topic,
  dueDate,
  status,
  overdue = false,
}: TaskCardProps) {
  const statusColours = {
    Todo: "bg-pink-100 text-pink-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Complete: "bg-green-100 text-green-700",
  };

  return (
    <div className="mb-5 rounded-3xl bg-white p-5 shadow-md transition hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            {title}
          </h3>
          <span className="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
            {topic}
          </span>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColours[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            📅{" "}
            {dueDate.toLocaleDateString("en-ZA", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          {overdue && (
            <span className="mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
              Overdue
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <Link
            href={`/edit-task/${id}`}
            className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200"
          >
            Edit
          </Link>
          <form action={archiveTask}>
            <input
              type="hidden"
              name="id"
              value={id}
            />
            <button
              type="submit"
              className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-300"
            >
              Archive
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}