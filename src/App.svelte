<script>
	import InputTodo from "./Components/InputTodo.svelte";
	import TodoList from "./Components/TodoList.svelte";
	import DeletedList from "./Components/DeletedList.svelte";
	import { count } from "./Components/stores.js";

	export let todos = [
		{
			id: 1,
			name: "carrot",
			completed: false,
			deleted: true,
		},
		{
			id: 2,
			name: "grape",
			completed: false,
			deleted: false,
		},
		{
			id: 3,
			name: "cherry",
			completed: false,
			deleted: false,
		},
	];

	let newTodo = " ";
	let newId = 10;

	function addTodo(newTodo) {
		newId = newId + 1;
		newTodo = { id: newId, name: newTodo };
		todos = [...todos, newTodo];
	}

	function deleteTodo(todo) {
		todo.deleted = todo.deleted === false ? true : false;
		todos = todos;
	}

	function updateTodo(todo) {
		let changeTodo = todos.filter(t => t.id === todo.id);
		changeTodo.name = todo.name;
	}

	// this empty object helps provide the shape that the todos will be
	// referenced to be bound using bind:this={todoObj[todo.id]}
	// it creates access to the html element
	let todoObj = {};
	function strikeTodo({ id }) {
		todoObj[id].classList.toggle("completed");
	}
</script>

<main>
	<h1>TODO</h1>
	<InputTodo {addTodo} {newTodo} />
	<ul>
		<TodoList
			{todos}
			{deleteTodo}
			{updateTodo}
			{strikeTodo}
			{todoObj}
		/>
		<hr />
		<br />
		<DeletedList
			{todos}
			{deleteTodo}
			{updateTodo}
			{strikeTodo}
			{todoObj}
		/>
	</ul>
	<h1>count is {$count.a}</h1>
	<button on:click={()=>count.increment('a')}>+</button>
	<button on:click={()=>count.decrement('a')}>-</button>
	<button on:click={()=>count.resetOne('a')}>reset</button>
	<h1>count is {$count.b}</h1>
	<button on:click={()=>count.increment('b')}>+</button>
	<button on:click={()=>count.decrement('b')}>-</button>
	<button on:click={()=>count.resetOne('b')}>reset</button>
	<h1>Master Reset</h1>
	<button on:click={count.reset}>Master Reset</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
