import tasks from '../data/tasks.json'
export const getTasks = async () => {
    return tasks.tasks
}

export const postTask = async (taskData) =>{
    taskData.id = tasks.tasks.length + 1;
    tasks.tasks.push(taskData);
    return{success: true, messsage: 'task add hoise re'}
}