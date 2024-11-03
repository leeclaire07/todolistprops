import { useState } from "react";
import "./App.css";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div>{props?.todo?.todo}</div>
      <div>{props?.todo?.time}</div>

      <button
        type="button"
        className="deleteButton"
        onClick={() => props.onDelete(props?.todo?.id)}
      >
        x
      </button>
    </div>
  );
};
function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState();
  const [todos, setTodos] = useState([]);
  const handleDelete = () => {
    setTodos([]);
  };
  const textChange = (e) => {
    setText(e.target.value);
    // console.log(text);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
    // console.log(time);
  };
  const submit = () => {
    const newTodo = [
      { todo: text, time: time, id: crypto.randomUUID() },
      ...todos,
    ];
    setTodos(newTodo);
  };
  const onDelete = (id) => {
    todos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <>
      <div>
        <h1>TO DO LIST</h1>
        <div>
          <input type="text" name="todo" onChange={textChange}></input>
          <input type="number" name="time" onChange={timeChange}></input>
          <button onClick={submit}>완성</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
        {todos.map((todo) => {
          return <Card key={todo.id} todo={todo} onDelete={onDelete} />;
        })}
      </div>
    </>
  );
}

export default App;
