import { writable } from 'svelte/store';

export let satelliteData = writable<Record<string, any>>({});
export let satelliteInfo = writable<Record<string, any>>({});