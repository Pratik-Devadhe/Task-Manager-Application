import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import {
    getTasks,
    createTask,
    deleteTask
} from "./services/taskService";

function App() {

    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (task) => {
        await createTask(task);
        fetchTasks();
    };

    const removeTask = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <div className="container">

            <h1>TaskFlow Pro</h1>

            <TaskForm addTask={addTask} />

            <TaskList
                tasks={tasks}
                removeTask={removeTask}
            />

        </div>
    );
}

export default App;