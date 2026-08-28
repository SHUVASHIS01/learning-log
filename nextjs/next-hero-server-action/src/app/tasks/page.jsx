import TasksCard from "../../components/TasksCard";
import { getTasks } from "../../lib/tasks";
import AddTask from "../../components/AddTask";
import createATask from "../../lib/actions";

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <div>
      <h2>Tasks: {tasks.length}</h2>
      <AddTask createATask={createATask}></AddTask>
      <div className="grid grid-cols-3 gap-4 pt-8">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
}
