import TasksCard from "../../components/TasksCard";
import { getTasks } from "../../lib/tasks";

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <div>
      <h2>Tasks: {tasks.length}</h2>
      <div>
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
}
