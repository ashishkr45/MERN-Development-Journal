	import { atom } from "recoil";

	export const networkAtom = atom({
		key: 'networkAtom',
		default: 104,
	});

	export const jobsAtom = atom({
		key: 'jobsAtom',
		default: 12,
	});

	export const messageAtom = atom({
		key: 'messageAtom',
		default: 189,
	});

	export const notiCountAtom = atom({
		key: 'notiCountAtom',
		default: 0,
	});