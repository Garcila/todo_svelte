<script>
	import { quintOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { todos } from "./stores";
	export let todo;
	let classCompleted = false;

	// Code for the todo animation between in Active and Deleted
	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === "none" ? "" : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
			};
		},
	});
</script>

<label in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
	<input
		id={todo.id}
		bind:value={todo.name}
		class="deleted completed"
		on:blur={todos.updateTodo(todo)}
	/>
	<!-- <button on:click={todos.strikeTodo(todo)}>&check;</button> -->
	{#if !todo.deleted}
		<button on:click={todos.deleteTodo(todo)}>&cross</button>
	{/if}
	{#if todo.deleted}
		<button on:click={todos.deleteTodo(todo)}>&#9853</button>
	{/if}
</label>

<!-- {todo.deleted ? "completed" : ""} -->

<!-- class={todo.deleted
	? "completed"
	: classCompleted
	? "completed"
	: "" || todo.completed ? "completed":""} -->
<style>
	.completed {
		text-decoration: line-through;
		opacity: 0.5;
	}
</style>
