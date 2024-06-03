import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font'

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'orange',
    }}>
      <Image source={require('./assets/logo.png')} style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 100,
        top: 20,
        resizeMode: 'contain',
      }} />

      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
        color: 'black',
        textAlign: 'left',
        width: '80%',
      }}>
        Login
      </Text>

      <View style={{
        justifyContent: 'center',
        marginBottom: 50,
      }}>
        
        <FormInput placeholder="Email" keyboardType="email-address" />
        <FormInput placeholder="Password" secureTextEntry />
        <Text style={{
          color: 'black',
          alignSelf: 'flex-end',
          marginRight: 10,
        }}>Forgot your password?</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
        <ButtonComponent backgroundColor='black' text='Sign Up' />
      </View>

      <Text style={{
        color: 'black',
        marginBottom: 8,
      }}>Sign up with another account
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
      }}>
        <AnotherLoginOption logo='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' />
        <AnotherLoginOption logo='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' />
      </View>
    </View>
  );
};

const ButtonComponent = ({ backgroundColor, text }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: backgroundColor,
      width: 300,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    }}>
      <Text style={{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const FormInput = ({ placeholder, secureTextEntry, keyboardType }) => {
  return (
    <View style={{
      alignItems: 'center',
      marginBottom: 10,
    }}>
      <TextInput
        style={{
          width: 300,
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          color: 'white',
        }}
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const AnotherLoginOption = ({ logo }) => {
  return (
    <Image
      source={{ uri: logo }}
      style={{ width: 50, height: 50, marginHorizontal: 20 }}
    />
  );
};



export default App;
