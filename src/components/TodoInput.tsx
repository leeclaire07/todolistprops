import React from "react";

const TodoInput = (props) => {
	const { textChange, timeChange, submit, handleDelete } = props;
	return (
		<div>
			<input type="text" name="todo" onChange={textChange}></input>
			<input type="number" name="time" onChange={timeChange}></input>
			<button onClick={submit}>완성</button>
			<button onClick={handleDelete}>삭제</button>
		</div>
	);
};

export default TodoInput;
