<script>
	export let todos;
	function updateTodo(todo) {
		let changeTodo = todos.filter(t => t.id === todo.id);
		changeTodo.name = todo.name;
	}
</script>

{#each todos as todo (todo.id)}
	<input
		bind:value={todo.name}
		on:blur={updateTodo(todo)}
	/>
{/each}
