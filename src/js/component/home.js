import React, { useState, useEffect } from "react";

export function Home() {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");
	const [count, setCount] = useState(0);

	const addItem = e => {
		setTask(e.target.value);
	};

	const deleteItem = taskIndex => {
		const newTasks = tasks.filter((_, index) => index !== taskIndex);
		setTasks(newTasks);
	};

	useEffect(() => {
		const newCountItem = tasks.length;
		setCount(newCountItem);
	});

	return (
		<div className="card">
			<div className="card-header">To Do List</div>
			<form
				onSubmit={evento => {
					setTasks(tasks.concat(task));
					evento.preventDefault();
					setTask("");
				}}>
				<input
					type="text"
					name="input"
					required
					placeholder="What needs to be done?"
					value={task}
					onChange={evento => {
						addItem(evento);
					}}
				/>
			</form>
			{tasks.map((task, index) => {
				return (
					<ul key={index}>
						{task}{" "}
						<button
							onClick={() => {
								deleteItem(index);
							}}>
							&nbsp;&#10007;&nbsp;
						</button>
					</ul>
				);
			})}
			<div className="card-footer text-muted">{count} item left</div>
		</div>
	);
}
