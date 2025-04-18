import { Stack } from 'expo-router'
import { Text, ActivityIndicator, ScrollView, View, Image, StatusBar } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { Screen } from '../components/Screen'
import { useEffect, useState } from 'react'
import { getPokemonDetails } from '../lib/pokemon'
import { TypeBadge } from '../components/TypeBadge'
import { StatsBox } from '../components/Stats'

export default function Detail() {
  const { name } = useLocalSearchParams()
  const [pokeInfo, setPokeInfo] = useState(null)

  useEffect(() => {
    getPokemonDetails(name)
      .then((data) => {
        setPokeInfo(data)
      })
      .catch((error) => {
        console.error('Error loading pokemon details:', error)
      })
  }, [name])

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'red' },
          headerTintColor: 'white',
          headerLeft: () => {},
          headerTitle: () => <Text className="text-white font-bold text-3xl">{name}</Text>,
          headerRight: () => {},
        }}
      />
      {pokeInfo === null ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ScrollView
          className=" bg-slate-500/90 rounded-xl p-5"
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', gap: 2 }}
        >
          <Image source={{ uri: pokeInfo.image }} style={{ width: '300', height: '300' }} />
          <View className="flex-row gap-2" key={pokeInfo.id}>
            <Text className="text-green-400 text-5xl font-bold">{pokeInfo.id}</Text>
            <Text className="text-white text-5xl font-bold">{pokeInfo.name}</Text>
          </View>

          <View className="flex-row mt-5 gap-2">
            <TypeBadge type={pokeInfo.types[0]} />
            {pokeInfo.types[1] && <TypeBadge type={pokeInfo.types[1]} />}
          </View>

          <View className="flex-row gap-2 mt-5">
            <StatsBox stats={pokeInfo.stats} />
          </View>
        </ScrollView>
      )}
    </Screen>
  )
}
