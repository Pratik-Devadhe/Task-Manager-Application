function TaskList({ tasks, removeTask }) {

    return (
        <div className="task-grid">

            {
                tasks.map((task) => (
                    <div className="task-card" key={task.id}>

                        <h2>{task.title}</h2>

                        <p>{task.description}</p>

                        <span className="priority">
                            {task.priority}
                        </span>

                        <br />

                        <span className="status">
                            {task.status}
                        </span>

                        <button
                            onClick={() => removeTask(task.id)}
                        >
                            Delete
                        </button>

                    </div>
                ))
            }

        </div>
    );
}

export default TaskList;