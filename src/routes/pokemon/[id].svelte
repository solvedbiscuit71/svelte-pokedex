<script>
	export let pokemon;
	$: type = pokemon.types[0].type.name;
</script>

<div>
	<h2>{pokemon.name}</h2>
	<p>
		Type: <b>{type}</b>
		<span>|</span>
		Weight: <b>{pokemon.weight}</b>
		<span>|</span>
		Height: <b>{pokemon.height}</b>
	</p>
	<img src={pokemon.sprites['front_default']} alt={pokemon.name} />
</div>

<style>
	* {
		font-family: sans-serif;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin: 2em 0;
		gap: 1em;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		text-align: center;
		margin: 0;
		text-transform: uppercase;
	}

	p {
		font-size: 0.85rem;
		text-align: center;
	}

	p span {
		font-size: 1rem;
		font-weight: 200;
		margin: 0 0.25em;
	}

	img {
		transform: scale(1.625);
		margin: 0 auto;
	}
</style>
