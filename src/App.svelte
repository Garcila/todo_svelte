<script>
	import TodoInput from "./Components/TodoInput.svelte";
	let newTodo = "";
	let todos = ["a", "b"];

	function addTodo(newTodo) {
		todos = [...todos, newTodo];
	}
</script>

<main>
	<h1>TODO</h1>
	<TodoInput {addTodo} {newTodo} />
	<ul>
		{#each todos as todo}
			<li>{todo}</li>
		{/each}
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
