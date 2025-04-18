import { Text, View } from 'react-native'

export function TypeBadge({ type }) {
  switch (type) {
    case 'normal':
      return (
        <View className="bg-gray-400 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Normal</Text>
        </View>
      )
    case 'fire':
      return (
        <View className="bg-red-400 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Fire</Text>
        </View>
      )
    case 'water':
      return (
        <View className="bg-blue-400 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Water</Text>
        </View>
      )
    case 'grass':
      return (
        <View className="bg-green-400 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Grass</Text>
        </View>
      )

    case 'electric':
      return (
        <View className="bg-yellow-400 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Electric</Text>
        </View>
      )

    case 'ice':
      return (
        <View className="bg-cyan-400 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Ice</Text>
        </View>
      )

    case 'fighting':
      return (
        <View className="bg-red-600 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Fighting</Text>
        </View>
      )

    case 'poison':
      return (
        <View className="bg-purple-600 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Poison</Text>
        </View>
      )

    case 'ground':
      return (
        <View className="bg-yellow-800 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Ground</Text>
        </View>
      )

    case 'flying':
      return (
        <View className="bg-blue-300 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Flying</Text>
        </View>
      )

    case 'psychic':
      return (
        <View className="bg-pink-400 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Psychic</Text>
        </View>
      )

    case 'bug':
      return (
        <View className="bg-green-600 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Bug</Text>
        </View>
      )

    case 'rock':
      return (
        <View className="bg-brown-600 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Rock</Text>
        </View>
      )

    case 'ghost':
      return (
        <View className="bg-purple-800 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Ghost</Text>
        </View>
      )

    case 'dragon':
      return (
        <View className="bg-blue-800 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Dragon</Text>
        </View>
      )

    case 'dark':
      return (
        <View className="bg-gray-800 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Dark</Text>
        </View>
      )
    case 'steel':
      return (
        <View className="bg-gray-600 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Steel</Text>
        </View>
      )

    case 'fairy':
      return (
        <View className="bg-pink-300 rounded-full px-2 py-1">
          <Text className="text-white text-xl font-bold">Fairy</Text>
        </View>
      )

    // Add more cases for other types as needed
    default:
      return (
        <View className="bg-gray-400 rounded-full px-2 py-1">
          <Text className="text-white font-bold">{type}</Text>
        </View>
      )
  }
}
