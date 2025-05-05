import {Stack} from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
		<>
		<Stack>
			<Stack.Screen name='index' options={{headershown: false}}/>
			<Stack.Screen name='home' options={{headershown: false}}/>
		</Stack>
		<StatusBar sttyle='light'/>
		</>
  )
}