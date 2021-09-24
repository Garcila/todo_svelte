<script>
	let newTodo = "";
	let todos = ["a", "b"];

	function addTodo() {
		todos = [...todos, newTodo];
		newTodo = "";
	}
</script>

<main>
	<h1>TODO</h1>
	<form id="todoForm" on:submit|preventDefault={addTodo}>
		<input
			type="text"
			name="new-todo"
			bind:value={newTodo}
			placeholder="Add New Todo"
		/>
	</form>
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
