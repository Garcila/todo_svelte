<script>
	export let todos;
	let completed = false;

	// this empty object helps provide the shape that the todos will be
	// referenced to be bound using bind:this={todoObj[todo.id]}
	// it creates access to the html element
	let todoObj = {};

	function updateTodo(todo) {
		let changeTodo = todos.filter(t => t.id === todo.id);
		changeTodo.name = todo.name;
	}

	function deleteTodo(todo) {
		todos = todos.filter(t => t.id !== todo.id);
	}

	function strikeTodo({ id }) {
		todoObj[id].classList.toggle("completed");
	}
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
		<button on:click={deleteTodo(todo)}>🗑</button>
		<button on:click={e => strikeTodo(todo)}>👾</button>
	</span>
{/each}

<style>
	.completed {
		text-decoration: line-through;
		opacity: 0.5;
	}
</style>
