import React from "react";

const Card = (props) => {
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

export default Card;
