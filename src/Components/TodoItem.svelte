<script>
	import {todos} from './stores';
	export let todo;
	let classCompleted = false;
</script>

<span
	><input
		id={todo.id}
		bind:value={todo.name}
		class={todo.deleted
			? "completed"
			: classCompleted
			? "completed"
			: "" || todo.completed ? "completed":""}
		on:blur={todos.updateTodo(todo)}
	/>
	<button on:click={todos.strikeTodo(todo)}>&check;</button>
	{#if !todo.deleted}
		<button on:click={todos.deleteTodo(todo)}>&cross</button>
	{/if}
	{#if todo.deleted}
		<button on:click={todos.deleteTodo(todo)}>&#9853</button>
	{/if}
</span>

<style>
	.completed {
		text-decoration: line-through;
		opacity: 0.5;
	}
</style>



