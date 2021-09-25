<script>
	import InputTodo from "./Components/InputTodo.svelte";
	import TodoList from "./Components/TodoList.svelte";
	let newId = 4;
	let newTodo = "";
	let todos = [
		{ id: 1, name: "carrot" },
		{ id: 2, name: "grape" },
		{ id: 3, name: "cherry" },
	];

	function addTodo(newTodo) {
		newId = newId + 1;
		newTodo = { id: newId, name: newTodo };
		todos = [...todos, newTodo];
	}
</script>

<main>
	<h1>TODO</h1>
	<InputTodo {newTodo} {addTodo} />
	<ul>
		<TodoList {todos} />
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
