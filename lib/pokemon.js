export async function getPokemons(limit = 100) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=200`)
  const data = await response.json()
  return data.results
}

export async function getPokemonWithImages(limit = 100) {
  const pokemons = await getPokemons(limit)

  const pokemonsWithImages = await Promise.all(
    pokemons.map(async (pokemon) => {
      const response = await fetch(pokemon.url)
      const data = await response.json()

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        // You can also include other images if needed:
        // officialArtwork: data.sprites.other['official-artwork'].front_default
      }
    }),
  )

  return pokemonsWithImages
}

export async function getPokemonDetails(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await response.json()

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map((type) => type.type.name),
    stats: data.stats.map((stat) => ({
      name: stat.stat.name,
      base_stat: stat.base_stat,
    })),
  }
}
