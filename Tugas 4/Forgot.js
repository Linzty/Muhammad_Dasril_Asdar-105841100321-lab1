import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

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
        
        color: 'black',
        textAlign: 'left',
        width: '90%',
      }}>
        Forgot Password
      </Text>

      <View style={{
        justifyContent: 'center',
        marginBottom: 50,
      }}>
        <Text style={{
          color: 'black',
          textAlign: 'left',
          width: '90%',
          bottom: 10,
        }}>Please, enter your email address.{"\n"}
         You will receive a link to create a new password via email.</Text>
        <FormInput placeholder="Email" keyboardType="email-address" />
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
        <ButtonComponent backgroundColor='black' text='Send' />
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
      source={logo}
      style={{ width: 50, height: 50, marginHorizontal: 20, resizeMode: 'contain', }}
    />
  );
};

export default App;
