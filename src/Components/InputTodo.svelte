<script>
	import { todos } from "./stores";

	function resetForm(e) {
		todos.newTodo = "";
	}
</script>

<form
	id="todoForm"
	on:submit|preventDefault={(todos.addTodo(todos.newTodo, todos.colour),
	resetForm())}
>
	<input
		type="text"
		name="new-todo"
		placeholder="Add New Todo"
		bind:value={todos.newTodo}
	/>
	<select
		bind:value={todos.colour}
		style={`background-color: #${todos.colour}`}
	>
		<option value={"FEF9EF"}>White</option>
		<option value={"227C9D"}>Blue</option>
		<option value={"17C3B2"}>Green</option>
		<option value={"FFCB77"}>Yellow</option>
		<option value={"FE6D73"}>Red</option>
	</select>
	<button type="submit">Add</button>
</form>

<style>
	option {
		background-color: red;
	}
</style>
