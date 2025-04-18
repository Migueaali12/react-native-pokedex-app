import { Link, Stack } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import '../global.css'
import { CircleInfoIcon, PokeballIcon } from '../components/Icons'
import { StatusBar } from 'expo-status-bar'

export default function Layout() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTitle: '',
          headerLeft: () => (
            <View className="flex-row justify-center items-center gap-2">
              <PokeballIcon color={'red'} />
              <Text className="text-white/90 text-3xl font-bold"> Mi Pokedex</Text>
            </View>
          ),
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  )
}
