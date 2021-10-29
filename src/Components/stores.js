import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

// the key and startValue are used to create the object to store in Local Storage
function manageTodos(key, startValue) {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		addTodo: newTodo => {
			update(todos => {
				newTodo = {
					id: uuidv4(),
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
		annihilateTodo: todo => {
			update(todos => {
				let filtered = todos.filter(t => todo.id != t.id);
				todos = filtered;
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
		// Local Storage implementation
		useLocalStorage: () => {
			const json = localStorage.getItem(key);
			if (json) {
				set(JSON.parse(json));
			}

			subscribe(current => {
				localStorage.setItem(key, JSON.stringify(current));
			});
		},
	};
}

export const todos = manageTodos("todos", []);
