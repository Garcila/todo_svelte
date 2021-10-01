<script>
	export let todos;
	export let deleteTodo;
	export let updateTodo;
	export let strikeTodo;
	export let todoObj;
	let completed = false;
</script>

{#each todos as todo (todo.id)}
	<span
		><input
			id={todo.id}
			bind:value={todo.name}
			bind:this={todoObj[todo.id]}
			class={completed ? "completed" : ""}
			on:blur={updateTodo(todo)}
		/>
		<button on:click={e => strikeTodo(todo)}>&check;</button
		>
		<button on:click={deleteTodo(todo)}>&cross</button>
	</span>
{/each}

<style>
	.completed {
		text-decoration: line-through;
		opacity: 0.5;
	}
</style>
