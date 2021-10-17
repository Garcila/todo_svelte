<script>
	import InputTodo from "./Components/InputTodo.svelte";
	import TodoList from "./Components/TodoList.svelte";
	import DeletedList from "./Components/DeletedList.svelte";
</script>

<main>
	<h1>TODO</h1>
	<InputTodo />
	<ul>
		<TodoList />
		<hr />
		<br />
		<DeletedList />
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