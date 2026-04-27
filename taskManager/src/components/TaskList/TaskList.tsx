import { useState } from "react";
import tasksData from "../../data/tasks.json";
import type { Task } from '../../types/index';
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


    return (
        <div>

            {/* Iterate through list and call TaskItem to display each */}
            {tasks.map((task) => (
                <TaskItem task={task} onDelete={handleDelete} />
            ))}

        </div>
    );
}