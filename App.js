import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
const App = () => {
  
  const [fontsLoaded, fontError] = useFonts({
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Thin': require('./assets/fonts/Metropolis-Thin.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
    'Metro-Semibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),


  });
      if (!fontsLoaded) return 
      <View>
          <Text>Font tidak ditemukan !</Text>
      </View>

  return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{ fontSize: 30}}>Hello There</Text>
        <Text style={{ fontFamily: 'Metro-Bold', fontSize: 30 }}>Metro Bold</Text>
        <Text style={{ fontFamily: 'Metro-Thin', fontSize: 30 }}>Metro Thin</Text>
        <Text style={{ fontFamily: 'Metro-Medium', fontSize: 30 }}>Metro Light</Text>
        <Text style={{ fontFamily: 'Metro-Semibold', fontSize: 30 }}>Metro SemiBold</Text>
        <Text style={{ fontFamily: 'Metro-Black', fontSize: 30 }}>Metro Black</Text>

      </View>
    )
}
export default App