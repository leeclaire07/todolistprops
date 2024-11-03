import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Card from "./components/Card";

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
				<TodoInput
					handleDelete={handleDelete}
					textChange={textChange}
					timeChange={timeChange}
					submit={submit}
				/>
				{todos.map((todo) => {
					return <Card key={todo.id} todo={todo} onDelete={onDelete} />;
				})}
			</div>
		</>
	);
}

export default App;
