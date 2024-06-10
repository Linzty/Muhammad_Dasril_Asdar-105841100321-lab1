import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginPage from './Page/LoginPage';
import SignupPage from './Page/SignupPage';
import ForgotPage from './Page/ForgotPage';
import { Button } from 'react-native';

function HomeScreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title = "Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title = "Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title = "Forgot Password"
        onPress={() => navigation.navigate('Forgot')}
      />
    </View>
    
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="SignUp" component={SignupPage}/>
        <Stack.Screen name="Forgot" component={ForgotPage}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;