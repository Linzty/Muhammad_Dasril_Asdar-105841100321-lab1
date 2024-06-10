import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignupPage from "./Page/SignupPage";
import LoginPage from "./Page/LoginPage";
import ForgotPage from "./Page/ForgotPage";

function HomeScreen({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => navigation.navigate("Sign Up")}
      activeOpacity={1}
    >
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={require("./assets/logo.png")}
          style={{ width: 300, height: 200 }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: "black",
          textDecorationLine: "underline",
        }}
      >
        Tap to enter
      </Text>
    </TouchableOpacity>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
