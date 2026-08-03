"use client";

import { Calendar } from "lucide-react";
import { createTask } from "../app/actions/taskActions";
export default function TaskForm() {

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-3xl font-bold text-pink-700">
        Create New Task
      </h2>

      <form action={createTask} className="space-y-6">

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Task Name
          </label>

          <input
            name="title"
            type="text"
            required
            placeholder="Enter task name"
            className="w-full rounded-xl border border-pink-200 p-3 focus:border-pink-400 focus:outline-none"
        />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Description
          </label>

          <textarea
            name="description"
            required
            rows={4}
            placeholder="Describe your task..."
            className="w-full rounded-xl border border-pink-200 p-3 focus:border-pink-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Topic
          </label>

          <input
            name="topic"
            type="text"
            required
            placeholder="Example: University"
            className="w-full rounded-xl border border-pink-200 p-3 focus:border-pink-400 focus:outline-none"
          />
        </div>

        <div>

          <label className="mb-2 block font-medium text-gray-700">
            Due Date
          </label>

          <div className="relative">

            <Calendar
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-500"
            />

            <input
                name="dueDate"
                type="date"
                required
                min={today}
                className="w-full rounded-xl border border-pink-200 p-3 pr-10 focus:border-pink-400 focus:outline-none"
            />

          </div>

        </div>

        <button
          className="w-full rounded-xl bg-pink-400 py-3 font-semibold text-white transition hover:bg-pink-500"
        >
          Create Task
        </button>

      </form>

    </div>
  );
}