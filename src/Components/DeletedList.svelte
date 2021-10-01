<script>
	import TodoItem from "./TodoItem.svelte";
	export let todos;
	export let deleteTodo;
	export let updateTodo;
	export let strikeTodo;
	export let todoObj;
</script>

<h2>Deleted Todos</h2>
{#each todos as todo (todo.id)}
	{#if todo.deleted}
		<TodoItem
			{todo}
			{updateTodo}
			{deleteTodo}
			{strikeTodo}
			{todoObj}
		/>
	{/if}
{/each}

<style>
</style>
