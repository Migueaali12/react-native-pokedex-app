import { Text, View } from 'react-native'

// Helper function to format stat names
const formatStatName = (name) => {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Helper function to determine stat color
const getStatColor = (statName) => {
  const colors = {
    hp: '#FF5959',
    attack: '#F5AC78',
    defense: '#FAE078',
    'special-attack': '#9DB7F5',
    'special-defense': '#A7DB8D',
    speed: '#FA92B2',
  }
  return colors[statName] || '#A0A0A0'
}

export function StatsBox({ stats }) {
  // Base stat max value to calculate percentage (255 is max in Pokémon games)
  const maxStatValue = 255

  return (
    <View className="bg-gray-800 rounded-lg p-5 shadow-lg min-w-80">
      <Text className="text-white text-xl font-bold mb-4">Base Stats</Text>

      {stats.map((stat, index) => (
        <View key={index} className="mb-3">
          <View className="flex-row justify-between mb-1">
            <Text className="text-white font-semibold w-32">{formatStatName(stat.name)}</Text>
            <Text className="text-white font-semibold">{stat.base_stat}</Text>
          </View>

          <View className="bg-gray-700 h-3 rounded-full overflow-hidden">
            <View
              style={{
                width: `${Math.min(100, (stat.base_stat / maxStatValue) * 100)}%`,
                backgroundColor: getStatColor(stat.name),
                height: '100%',
              }}
            />
          </View>
        </View>
      ))}

      <View className="mt-3 border-t border-gray-700 pt-3">
        <Text className="text-gray-400 text-xs text-center">
          Total: {stats.reduce((total, stat) => total + stat.base_stat, 0)}
        </Text>
      </View>
    </View>
  )
}
