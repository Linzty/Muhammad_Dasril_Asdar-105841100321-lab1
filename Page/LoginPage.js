import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";


const { width, height } = Dimensions.get("window");

const LoginPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Metro-Bold": require("../assets/fonts/Metropolis-Bold.otf"),
    "Metro-Thin": require("../assets/fonts/Metropolis-Thin.otf"),
    "Metro-Medium": require("../assets/fonts/Metropolis-Medium.otf"),
    "Metro-Semibold": require("../assets/fonts/Metropolis-SemiBold.otf"),
    "Metro-Black": require("../assets/fonts/Metropolis-Black.otf"),
  });

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
          color: "black",
          textAlign: "left",
          width: "100%",
          fontFamily: "Metro-Black",
          marginBottom: 30,
        }}
      >
        Login
      </Text>

      <View
        style={{
          width: "100%",
          marginBottom: 20,
        }}
      >
        <FormInput placeholder="Email" keyboardType="email-address" />
        <FormInput placeholder="Password" secureTextEntry />
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
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
  onPress={() => navigation.navigate("Main")}
  style={{
    backgroundColor: "black",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  }}
>
  <Text
    style={{
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: "Metro-Semibold",
    }}
  >
    Login
  </Text>
</TouchableOpacity>

      <Text
        style={{
          color: "black",
          marginBottom: 8,
          fontFamily: "Metro-Thin",
        }}
      >
        Sign in with another account
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 40 }}>
        <AnotherLoginOption name="google" />
        <AnotherLoginOption name="facebook-square" />
      </View>
    </View>
  );
};

const ButtonComponent = ({ backgroundColor, text }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        width: "100%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "Metro-Semibold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const FormInput = ({ placeholder, secureTextEntry, keyboardType }) => {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: 10,
        width: "100%",
      }}
    >
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
      />
    </View>
  );
};

const AnotherLoginOption = ({ name }) => {
  return <AntDesign name={name} size={50} color="black" style={{ marginHorizontal: 10 }} />;
};

export default LoginPage;
