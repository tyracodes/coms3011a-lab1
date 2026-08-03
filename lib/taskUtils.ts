export function isTaskOverdue(
  dueDate: Date,
  status: string
): boolean {
  return (
    status !== "Complete" &&
    dueDate < new Date()
  );
}