import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const CircleInfoIcon = (props) => {
  return <FontAwesome6 name="circle-info" size={24} color="white" {...props} />
}

export const HomeIcon = (props) => {
  return <FontAwesome name="home" size={32} color="white" {...props} />
}

export const PokeballIcon = (props) => {
  return <MaterialCommunityIcons name="pokeball" size={32} color="white" {...props} />
}