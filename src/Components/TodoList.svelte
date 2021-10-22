<script>
	import { quintOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { todos } from "./stores";
	import TodoItem from "./TodoItem.svelte";
	import DeletedItem from "./DeletedItem.svelte";

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

<h2>Active Todos</h2>

{#each $todos.filter(todo => !todo.deleted) as todo (todo.id)}
	<label in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
		<input
			id={todo.id}
			bind:value={todo.name}
			on:blur={todos.updateTodo(todo)}
			class={todo.completed ? "completed" : ""}
		/>
		<button on:click={todos.strikeTodo(todo)}>&check;</button>
		<button on:click={todos.deleteTodo(todo)}>&cross</button>
	</label>
{/each}
<h2>Completed Todos</h2>
{#each $todos.filter(todo => todo.deleted) as todo (todo.id)}
	<label in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
		<input
			id={todo.id}
			bind:value={todo.name}
			class="deleted completed"
			on:blur={todos.updateTodo(todo)}
		/>
		<button on:click={todos.deleteTodo(todo)}>&#9853</button>
		<button on:click={todos.annihilateTodo(todo)}>💀</button>
	</label>
{/each}

<style>
	.completed {
		text-decoration: line-through;
		opacity: 0.5;
	}
</style>
