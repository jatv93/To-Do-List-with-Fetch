import React, { useState } from "react";

export function Home() {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");

	const addItem = e => {
		setTask(e.target.value);
	};

	const deleteItem = taskIndex => {
		const newTasks = tasks.filter((_, index) => index !== taskIndex);
		setTasks(newTasks);
	};

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
						<span
							onClick={() => {
								deleteItem(index);
							}}>
							&nbsp;&#10007;&nbsp;
						</span>
					</ul>
				);
			})}

			<div className="card-footer text-muted">item left</div>
		</div>
	);
}
