"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "dueDate";

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    router.push(`/?sort=${event.target.value}`);
  }

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort"
        className="font-medium text-gray-700"
      >
        Sort By:
      </label>

      <select
        id="sort"
        value={currentSort}
        onChange={handleChange}
        className="rounded-lg border border-pink-300 px-3 py-2"
      >
        <option value="dueDate">Due Date</option>
        <option value="topic">Topic</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
}