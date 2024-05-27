import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ButtonEx = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </View>
      <View style={[styles.button, styles.registerButton]}>
        <Text style={styles.buttonText}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: height * -0.29, 
  },
  button: {
    flex: 1,
    backgroundColor: 'orange',
    width: width * 0.4, 
    height: height * 0.08, 
    borderRadius: 10,
    marginHorizontal: width * 0.05, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#47C7FC',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ButtonEx;
