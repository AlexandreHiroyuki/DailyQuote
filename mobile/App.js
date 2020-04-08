import React from 'react'
import { View, StatusBar } from 'react-native'
import Routes from './src/routes'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' translucent={true} />
      <Routes />
    </View>
  )
}
