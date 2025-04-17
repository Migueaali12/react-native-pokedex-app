import { Link } from 'expo-router'
import { Pressable, ScrollView, Text } from 'react-native'
import { HomeIcon } from '../components/Icons'
import { Screen } from '../components/Screen'

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <Pressable>{({ pressed }) => <HomeIcon size={30} style={{ opacity: pressed ? 0.5 : 1 }} />}</Pressable>
        </Link>

        <Text className="text-white/90 text-5xl">Sobre el proyecto</Text>

        <Text className="text-white/90 text-2xl text-center mt-2 mb-4">
          This is a simple Pokedex app built with React Native and Expo. It allows you to view a list of Pokemon and
          their details.
        </Text>
      </ScrollView>
    </Screen>
  )
}
