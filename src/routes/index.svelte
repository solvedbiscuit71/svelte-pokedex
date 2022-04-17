<script>
	import Card from '../components/card.svelte';
	import { pokemons } from '../stores/pokestore';

	let searchTerm = '';
	let filterPokemon = [];
	$: {
		if (searchTerm.length === 0) {
			filterPokemon = [...$pokemons];
		} else {
			filterPokemon = $pokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}
	}
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1>Welcome to Pokedex</h1>

<form>
	<input bind:value={searchTerm} type="text" placeholder="Search pokemon" />
</form>
<div class="container">
	{#each filterPokemon as pokemon (pokemon.id)}
		<Card {...pokemon} />
	{/each}
</div>

<style>
	* {
		font-family: sans-serif;
	}

	h1 {
		font-size: 2rem;
		font-weight: 500;
		text-align: center;
		margin: 1em 0;
		text-transform: uppercase;
	}

	.container {
		display: grid;
		gap: 1.125em;
		margin: 2em auto;
		padding: 0 1em;
		max-width: 1080px;

		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}

	form {
		max-width: 1080px;
		margin: 2em auto;
		padding: 0 1em;
	}

	input {
		width: 100%;
		min-height: 2.5em;
		grid-column: span 2;

		box-sizing: border-box;
		border: 1.5px solid hsl(0, 3%, 75%);
		border-radius: 0.25em;
		color: black;

		font-size: 1.125rem;
		padding: 0 0.5em;
	}

	input:focus {
		outline: none;
	}

	@media (min-width: 769px) {
		.container {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}
	}
</style>
