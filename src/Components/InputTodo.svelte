<script>
	export let addTodo;
	export let newTodo;

	function resetForm() {
		newTodo = "";
	}
</script>

<form
	id="todoForm"
	on:submit|preventDefault={(addTodo(newTodo), resetForm())}
>
	<input
		type="text"
		name="new-todo"
		placeholder="Add New Todo"
		bind:value={newTodo}
	/>
</form>
