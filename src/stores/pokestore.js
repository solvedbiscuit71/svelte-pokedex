import { writable } from 'svelte/store';

export const pokemons = writable([]);

const fetchPokemons = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const res = await fetch(url);
	const data = await res.json();

	const loadedPokemon = data.results.map((pokemon, index) => {
		return {
			id: index + 1,
			name: pokemon.name,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemons.set(loadedPokemon);
};
fetchPokemons();
