<script>
	export let todos;
	function updateTodo(todo) {
		let changeTodo = todos.filter(t => t.id === todo.id);
		changeTodo.name = todo.name;
	}

	function deleteTodo(todo) {
		todos = todos.filter(t => t.id !== todo.id);
	}
</script>

{#each todos as todo (todo.id)}
	<span
		><input
			bind:value={todo.name}
			on:blur={updateTodo(todo)}
		/>
		<button on:click={deleteTodo(todo)}>🗑</button>
	</span>
{/each}
