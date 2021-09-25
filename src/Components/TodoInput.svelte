<script>
	export let addTodo;
	export let newTodo;
</script>

<form
	id="todoForm"
	on:submit|preventDefault={addTodo(newTodo, "")}
>
	<input
		type="text"
		name="new-todo"
		placeholder="Add New Todo"
		bind:value={newTodo}
	/>
</form>
