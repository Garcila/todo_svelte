import { writable } from "svelte/store";

function createCount() {
	const { subscribe, set, update } = writable({ a: 0, b: 0 });

	return {
		subscribe,
		// increment: (e) => update(n => {return {...n, a: n.a + 1}}),
		increment: chosenCount =>
			update(n => {
				console.log(n, chosenCount);
				return { ...n, [chosenCount]: n[chosenCount] + 1 };
			}),

		decrement: chosenCount =>
			update(n => {
				return { ...n, [chosenCount]: n[chosenCount] - 1 };
			}),
		resetOne: chosenCount =>
			update(n => {
				return { ...n, [chosenCount]: 0 };
			}),
		reset: () => {
			set({ a: 0, b: 0 });
		},
	};
}

export const count = createCount();
