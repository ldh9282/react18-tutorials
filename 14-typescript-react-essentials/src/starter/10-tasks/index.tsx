import { useEffect, useState } from "react";

import Form from "./Form";
import List from "./List";
import { type Task } from "./types";

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem("tasks");

    return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateTasks(tasks: Task[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function Component() {
    const [tasks, setTasks] = useState<Task[]>(loadTasks());
    const addTasks = (task: Task): void => {
        setTasks([...tasks, task]);
    };

    const toggleTask = ({ id }: { id: String }): void => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            })
        );
    };

    useEffect(() => {
        updateTasks(tasks);
    }, [tasks]);
    return (
        <section>
            <Form addTasks={addTasks} />
            <List tasks={tasks} toggleTask={toggleTask} />
        </section>
    );
}
export default Component;
