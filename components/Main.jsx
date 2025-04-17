import { useEffect, useState } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { getPokemonWithImages } from '../lib/pokemon'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatedCard } from './Card'
import { Screen } from './Screen'

export function Main() {
  const insets = useSafeAreaInsets()
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    async function loadPokemon() {
      try {
        const data = await getPokemonWithImages(200)
        setPokemon(data)
      } catch (error) {
        console.error('Error loading pokemon:', error)
      }
    }
    loadPokemon()
  }, [])

  return (
    <Screen>

      {pokemon.length === 0 ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={pokemon}
          keyExtractor={(item) => item.id}
          renderItem={({ index, item }) => <AnimatedCard poke={item} index={index} />}
        />
      )}
    </Screen>
  )
}
