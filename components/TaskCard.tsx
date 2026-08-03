type TaskCardProps = {
  title: string;
  topic: string;
  dueDate: string;
  status: "Todo" | "In Progress" | "Complete";
  overdue?: boolean;
};

export default function TaskCard({
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

        <p className="text-sm text-gray-500">
          📅 {dueDate}
        </p>

        {overdue && (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
            Overdue
          </span>
        )}

      </div>

    </div>
  );
}