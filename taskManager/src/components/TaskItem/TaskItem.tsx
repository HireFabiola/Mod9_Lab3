import type { TaskItemProps } from "../../types";

export function TaskItem({ task}: TaskItemProps) {
  return (
    <div className="card mb-3 p-3">
      <div className="d-flex flex-column text-start">
      <p><strong>Task {task.id}:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Priority:</strong> {task.priority} | <strong>Due:</strong>  {new Date(task.dueDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

