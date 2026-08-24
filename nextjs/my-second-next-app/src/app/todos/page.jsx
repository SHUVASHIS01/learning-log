const ToDoPage = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
  return (
    <div>
        <h2>Tod-Dos: {todos.length} </h2>
    </div>
  );
};

export default ToDoPage;