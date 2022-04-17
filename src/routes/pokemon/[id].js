export async function get({ params }) {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

	const res = await fetch(url);
	const data = await res.json();

	return {
		body: {
			pokemon: data
		}
	};
}
