type TaskCardProps = {
  title: string;
  topic: string;
  dueDate: string;
  status: string;
};

export default function TaskCard({
  title,
  topic,
  dueDate,
  status,
}: TaskCardProps) {
  return (
    <div className="mb-4 rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {topic}
          </p>

        </div>

        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
          {status}
        </span>

      </div>

      <p className="mt-4 text-sm text-gray-400">

        Due: {dueDate}

      </p>

    </div>
  );
}