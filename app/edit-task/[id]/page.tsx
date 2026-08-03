type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditTaskPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-pink-100 p-10">

      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-3xl font-bold text-pink-700">
          Edit Task
        </h1>

        <p className="text-lg text-gray-700">
          Editing task with ID:
        </p>

        <p className="mt-2 text-2xl font-bold text-pink-600">
          {id}
        </p>

      </div>

    </main>
  );
}