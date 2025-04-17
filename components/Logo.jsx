import Svg, { Path } from 'react-native-svg'

export function Logo(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-pokeball"
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" />
      <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
      <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 12h6M15 12h6" />
    </Svg>
  )
}
