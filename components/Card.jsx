import { Link } from 'expo-router'
import { useEffect, useRef } from 'react'
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export function Card({ poke }) {
  return (
    <Link asChild href={`/${poke.name}`}>
      <Pressable
        className="active:opacity-70 active:border-white/50 border border-black
       bg-slate-500/30 p-5 rounded-xl gap-4 mb-5"
      >
        <View className="flex-row items-center justify-center gap-4" key={poke.id}>
          <Image source={{ uri: poke.image }} className="bg-white rounded-xl" style={styles.image} />
          <View>
            <Text className="text-green-400 text-xl font-bold">{poke.id}</Text>
            <Text style={styles.title}>{poke.name}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  )
}

export function AnimatedCard({ poke, index }) {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      delay: index * 100,
      useNativeDriver: true,
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <Card poke={poke} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#949389',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  number: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },

  image: {
    width: 100,
    height: 100,
  },
})
