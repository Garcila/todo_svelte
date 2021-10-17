<script>
	import {todos} from './stores';
	import TodoItem from "./TodoItem.svelte";
</script>

<h2>Deleted Todos</h2>
{#each $todos as todo (todo.id)}
	{#if todo.deleted}
		<TodoItem
			{todo}
		/>
	{/if}
{/each}

<style></style>
