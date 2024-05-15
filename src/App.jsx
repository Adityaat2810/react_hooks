import { useState } from "react";
import { useEffect } from "react";

function App() {
  // state ?

  const [todoId, setTodoId] = useState(1);
  return <div>
      <button onClick={() => setTodoId(1)}>1</button>
      <button onClick={() => setTodoId(2)}>2</button>
      <button onClick={() => setTodoId(3)}>3</button>
      <button onClick={() => setTodoId(4)}>4</button>


    <Todo id={todoId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [id])  // do not forget to add id as dependency in depedency array

  return <div>
    Id:{id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;