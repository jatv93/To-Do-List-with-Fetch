import React, { useState, useEffect } from "react";

export function Home() {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");
	const [count, setCount] = useState(tasks.length);

	useEffect(() => {
		getTasks(
			"https://assets.breatheco.de/apis/fake/todos/user/alesanchezr"
		);
	}, []);

	const getTasks = url => {
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok);
				console.log(resp.status);
				return resp.json();
			})
			.then(data => {
				setTasks([]);
				console.log(data);
			})
			.catch(error => {
				console.log(error);
			});
	};

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
					setCount(count + 1);
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
								setCount(count - 1);
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
