import { writable } from "svelte/store";

// FIXME: newId is just the starting value.  When DB fix
let newId = 5;

function manageTodos() {
	const { subscribe, set, update } = writable([
		{
			id: 1,
			name: "carrot",
			completed: false,
			deleted: true,
		},
		{
			id: 2,
			name: "grape",
			completed: false,
			deleted: false,
		},
		{
			id: 3,
			name: "cherry",
			completed: false,
			deleted: false,
		},
	]);

	return {
		subscribe,
		addTodo: newTodo => {
			update(todos => {
				newId = newId + 1;
				newTodo = {
					id: newId,
					name: newTodo,
					completed: false,
					deleted: false,
				};
				return [...todos, newTodo];
			});
		},
		deleteTodo: todo => {
			update(todos => {
				todo.deleted = todo.deleted === false ? true : false;
				[...todos, todo.deleted];
				return todos;
			});
		},
		updateTodo: todo => {
			update(todos => {
				let changeTodo = todos.filter(t => t.id === todo.id);
				changeTodo.name = todo.name;
				return todos;
			});
		},
		strikeTodo: todo => {
			update(todos => {
				todo.completed = todo.completed === false ? true : false;
				return todos;
			});
		},
	};
}

export const todos = manageTodos();
