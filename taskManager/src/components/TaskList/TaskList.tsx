import { useState } from "react";
import tasksData from "../../data/tasks.json";
import type { Task, TaskStatus } from '../../types/index';
import { TaskItem } from "../TaskItem/TaskItem";

export function TaskList() {


    const [tasks, setTasks] = useState<Task[]>(tasksData as Task[]);

    // Declaration of function to handle deletion of a task
    const handleDelete = (id: string) => {
        setTasks((prevTasks) => {

            // Use pre-defined filter function to iterate through array to keep tasks not matched to selected deletion task id
            const updatedTasks = prevTasks.filter((task) => {
                return task.id !== id;
            });

            // Return new array 
            return updatedTasks;
        });
    };

    const handleStatusChange = (id: string, newStatus: TaskStatus) => {
        setTasks((prevTasks) => {

            // Use pre-defined map function to iterate through array and update
            // the status of the task that matches the selected id
            const updatedTasks = prevTasks.map((task) => {

                // If selected task is found
                if (task.id === id) {
                    // Return a NEW object with updated status
                    return {
                        id: task.id,
                        title: task.title,
                        description: task.description,
                        status: newStatus,
                        priority: task.priority,
                        dueDate: task.dueDate
                    };
                }
                // Otherwise, return the task unchanged
                return task;
            });

            // Return new array
            return updatedTasks;
        });
    };


    return (
        <div>
            {/* Iterate through list and call TaskItem to display each */}
            {tasks.map((task) => (
                <TaskItem task={task} onStatusChange={handleStatusChange} onDelete={handleDelete} />
            ))}
        </div>
    );
}