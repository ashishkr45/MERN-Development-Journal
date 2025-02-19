import { atomFamily } from "recoil";
import { TODOS } from './todos';

// every value which is passed through this is passed as a atom
export const todoAtomFamily = atomFamily({
	key: 'todoAtomFamily',
	default: id => {
		const tofu = TODOS.find(x => x.id === id);
		console.log(tofu);
		return  tofu;
	},
});