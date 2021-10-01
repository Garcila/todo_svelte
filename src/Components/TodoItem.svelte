<script>
	export let todo;
	export let deleteTodo;
	export let updateTodo;
	export let strikeTodo;
	export let todoObj;
	let classCompleted = false;
</script>

<span
	><input
		id={todo.id}
		bind:value={todo.name}
		bind:this={todoObj[todo.id]}
		class={classCompleted ? "completed" : ""}
		on:blur={updateTodo(todo)}
	/>
	<button on:click={e => strikeTodo(todo)}>&check;</button>
	<button on:click={deleteTodo(todo)}>&cross</button>
</span>

<style>
	.completed {
		text-decoration: line-through;
		opacity: 0.5;
	}
</style>
