import { Tabs } from 'expo-router'
import { CircleInfoIcon, PokeballIconFilled } from '../../components/Icons'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Pokédex',
          headerShown: false,
          tabBarIcon: ({ color }) => <PokeballIconFilled color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Información',
          headerShown: false,
          tabBarIcon: ({ color }) => <CircleInfoIcon color={color} size={20} />,
        }}
      />
    </Tabs>
  )
}
