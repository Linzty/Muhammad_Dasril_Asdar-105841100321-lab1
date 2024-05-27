import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import ButtonEx from './button1';
import Title from './Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.logoContainer}>
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
      </View>
      <ButtonComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 100,
  },
});

const ButtonComponent = ({ backgroundColor, text }) => {
  return (
    <View style={{
      backgroundColor: backgroundColor,
      width: 150,
      height: 70,
      borderRadius: 10,
      marginLeft: 10
    }}>
      <Text style={{
        color: 'white',
        textAlign: 'center',
        lineHeight: 70,
        fontSize: 25,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </View>
  )
}