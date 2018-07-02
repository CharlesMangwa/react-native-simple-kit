import { createContext } from 'react'
import { AppState, Dimensions, Platform } from 'react-native'

const Device = createContext({
  appState: AppState.currentState,
  height: Dimensions.get('window').height,
  isConnected: undefined,
  platform: Platform.OS,
  width: Dimensions.get('window').width,
})

export default Device
