import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image } from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");

const LoginPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Metro-Bold": require("../assets/fonts/Metropolis-Bold.otf"),
    "Metro-Thin": require("../assets/fonts/Metropolis-Thin.otf"),
    "Metro-Medium": require("../assets/fonts/Metropolis-Medium.otf"),
    "Metro-Semibold": require("../assets/fonts/Metropolis-SemiBold.otf"),
    "Metro-Black": require("../assets/fonts/Metropolis-Black.otf"),
  });

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    const { email, password } = formLogin;
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'All fields are required!',
      });
      return;
    }

    if (!isValidEmail(email)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter a valid email address!',
      });
      return;
    }

    try {
      const storedEmail = await AsyncStorage.getItem("userEmail");
      const storedPassword = await AsyncStorage.getItem("userPassword");

      if (email === storedEmail && password === storedPassword) {
        Toast.show({
          type: 'info',
          text1: 'Processing',
          text2: 'Logging in...',
          autoHide: false,
        });

        setTimeout(() => {
          Toast.hide();
          navigation.navigate("Main");
        }, 3000);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Invalid email or password!',
        });
      }
    } catch (error) {
      console.log("Error retrieving user information:", error.message);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to log in. Please try again later.',
      });
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (!fontsLoaded)
    return (
      <View>
        <Text>Font tidak ditemukan!</Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "orange",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{
          width: width * 0.6,
          height: height * 0.2,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />

      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 30,
          color: "black",
          textAlign: "left",
          width: "100%",
          fontFamily: "Metro-Black",
        }}
      >
        Login
      </Text>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <FormInput 
          placeholder="Email" 
          keyboardType="email-address" 
          value={formLogin.email}
          onChangeText={(value) => setFormLogin({ ...formLogin, email: value })}
        />
        <FormInput 
          placeholder="Password" 
          secureTextEntry 
          value={formLogin.password}
          onChangeText={(value) => setFormLogin({ ...formLogin, password: value })}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text
            style={{
              color: "black",
              alignSelf: "flex-end",
              marginTop: 10,
              fontFamily: "Metro-Thin",
              textDecorationLine: "underline",
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          width: "100%",
          height: 50,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
        onPress={onSubmit}
      >
        <Text
          style={{ color: "white", fontSize: 20, fontWeight: "bold", fontFamily: "Metro-Semibold" }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <Text style={{ color: "black", marginBottom: 8, fontFamily: "Metro-Thin" }}>
        Login with another account
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 40 }}>
        <AnotherLoginOption name="google" />
        <AnotherLoginOption name="facebook-square" />
      </View>

      <Toast />
    </View>
  );
};

const FormInput = ({ placeholder, secureTextEntry, keyboardType, value, onChangeText }) => {
  return (
    <View style={{ alignItems: "center", marginBottom: 10, width: "100%" }}>
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          color: "black",
          fontFamily: "Metro-Thin",
        }}
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const AnotherLoginOption = ({ name }) => {
  return <AntDesign name={name} size={50} color="black" style={{ marginHorizontal: 10 }} />;
};

export default LoginPage;
