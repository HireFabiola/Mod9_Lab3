import { useState } from "react";
import tasksData from "../../data/tasks.json";
import type { Task } from '../../types/index';
import { TaskItem } from "../TaskItem/TaskItem";

export function TaskList() {

    
    const [tasks, setTasks] = useState<Task[]>(tasksData as Task[]);

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem task={task}/>
            ))}

        </div>
    );
}