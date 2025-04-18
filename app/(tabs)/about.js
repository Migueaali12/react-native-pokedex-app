import { ScrollView, Text } from 'react-native'
import { Screen } from '../../components/Screen'
import { Stack } from 'expo-router'

export default function About() {
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'red' },
          headerTintColor: 'white',
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />

      <ScrollView>
        <Text className="text-white/90 text-5xl">Sobre el proyecto</Text>

        <Text className="text-white/90 text-2xl text-center mt-2 mb-4">
          Este es un proyecto de prueba para aprender a usar Expo y React Native con una Pokedex.
        </Text>
      </ScrollView>
    </Screen>
  )
}
