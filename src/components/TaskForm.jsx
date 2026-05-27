import { useState } from "react";

function TaskForm({ addTask }) {

    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: "High",
        status: "Pending"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);

        setTask({
            title: "",
            description: "",
            priority: "High",
            status: "Pending"
        });
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) =>
                    setTask({ ...task, title: e.target.value })
                }
                required
            />

            <textarea
                placeholder="Description"
                value={task.description}
                onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                }
            />

            <select
                value={task.priority}
                onChange={(e) =>
                    setTask({ ...task, priority: e.target.value })
                }
            >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>

            <button type="submit">
                Add Task
            </button>

        </form>
    );
}

export default TaskForm;