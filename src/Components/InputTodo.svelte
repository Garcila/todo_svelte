<script>
	import { todos } from "./stores";

	function resetForm(e) {
		todos.newTodo = ''
	}
</script>

<form
	id="todoForm"
	on:submit|preventDefault={(todos.addTodo(todos.newTodo),resetForm())}
>
	<input
		type="text"
		name="new-todo"
		placeholder="Add New Todo"
		bind:value={todos.newTodo}
	/>
</form>
