<script>
	export let todos;
</script>

{#each todos as todo (todo.id)}
	<li>{todo.name}</li>
{/each}
