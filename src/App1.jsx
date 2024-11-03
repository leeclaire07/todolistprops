import { useState } from "react";
import "./App.css";

const Todos = (props) => {
  console.log(props);
  return (
    <div>
      <div>{props?.todo?.todo}</div>
      <div>{props?.todo?.time}</div>
    </div>
  );
};

function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState();
  const [todo, setTodo] = useState(undefined);
  const handleDelete = () => {
    setTodo(undefined)
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
    const newTodo = { todo: text, time: time };
    setTodo(newTodo);
  };

  // let todo =
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
        <Todos todo={todo} />
      </div>
    </>
  );
}

export default App;
