<script>
	import InputTodo from "./Components/InputTodo.svelte";
	import TodoList from "./Components/TodoList.svelte";

	export let todos = [
		{ id: 1, name: "carrot" },
		{ id: 2, name: "grape" },
		{ id: 3, name: "cherry" },
	];

	let newTodo = " ";
	let newId = 10;

	function addTodo(newTodo) {
		newId = newId + 1;
		newTodo = { id: newId, name: newTodo };
		todos = [...todos, newTodo];
		console.log(todos);
	}

	function deleteTodo(todo) {
		todos = todos.filter(t => t.id !== todo.id);
		console.log(todos);
		todos = todos;
	}
	function updateTodo(todo) {
		let changeTodo = todos.filter(t => t.id === todo.id);
		changeTodo.name = todo.name;
	}

	// this empty object helps provide the shape that the todos will be
	// referenced to be bound using bind:this={todoObj[todo.id]}
	// it creates access to the html element
	let todoObj = {};
	function strikeTodo({ id }) {
		todoObj[id].classList.toggle("completed");
	}
</script>

<main>
	<h1>TODO</h1>
	<InputTodo {addTodo} {newTodo} />
	<ul>
		<TodoList
			{todos}
			{deleteTodo}
			{updateTodo}
			{strikeTodo}
			{todoObj}
		/>
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
