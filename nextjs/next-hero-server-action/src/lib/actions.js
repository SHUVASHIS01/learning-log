import {postTask} from "./tasks";
export default async function createATask(formData) {
    "use server";

    const taskData = Object.fromEntries(formData.entries());
    console.log("Adding a task:", taskData);
    await postTask(taskData);
}