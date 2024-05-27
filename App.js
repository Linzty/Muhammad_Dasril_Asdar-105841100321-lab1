import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Title from './Title';

const ButtonCustom = () => {
  return (
      <View style={styles.container}>
        <Title />
        <View style={styles.logoContainer}>
             <Image source={require('./assets/Logo.png')} style={styles.logo} />
        </View>
          <ButtonComponent backgroundColor='red' text='Login' />
          <ButtonComponent backgroundColor='green' text='Register' />
      </View>
  )
}

const ButtonComponent = ({ backgroundColor, text }) => {
  return (
      <View style={{
          backgroundColor: backgroundColor,
          width: 150,
          height: 70,
          borderRadius: 10,
          marginTop: 30,
          
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

export default ButtonCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    

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