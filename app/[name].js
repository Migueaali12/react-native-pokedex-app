import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { Screen } from '../components/Screen'

export default function Detail() {
  const { name } = useLocalSearchParams()

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'red' },
          headerTintColor: 'white',
          headerLeft: () => {},
          headerTitle: () => <Text>{name}</Text>,
          headerRight: () => {},
        }}
      />
      <View className="flex-1 justify-center items-center bg-blue-950">
        <Text className="text-white/90 text-5xl w-full text-center">{name}</Text>
        <Text className="text-white/90 text-2xl text-center mt-2 mb-4">
          This is a simple Pokedex app built with React Native and Expo. It allows you to view a list of Pokemon and
          their details.
        </Text>
        <Link href="/" className="text-blue-400">
          <Text className="text-blue-400 text-xl">← Back to Home</Text>
        </Link>
      </View>
    </Screen>
  )
}
