import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import SignupPage from "./Page/SignupPage";
import LoginPage from "./Page/LoginPage";
import ForgotPage from "./Page/ForgotPage";

const Tab = createBottomTabNavigator();


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
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false ,
            tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"orange":"gray"}}>Home</Text>),
            tabBarIcon: ({ size }) => (
            <AntDesign name="home" color={"orange"} size={size} />),}}
        />
        <Tab.Screen
          name="Sign Up"
          component={SignupPage}
          options={{ headerShown: false ,
            tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"orange":"gray"}}>Sign Up</Text>),
            tabBarIcon: ({ size }) => (
            <AntDesign name="adduser" color={"orange"} size={size} />),}}
        />
        <Tab.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false ,
            tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"orange":"gray"}}>Login</Text>),
            tabBarIcon: ({ size }) => (
            <AntDesign name="login" color={"orange"} size={size} />),}}
        />
        <Tab.Screen
          name="Forgot"
          component={ForgotPage}
          options={{ headerShown: false ,
            tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"orange":"gray"}}>Forgot</Text>),
            tabBarIcon: ({ size,  }) => (
            <AntDesign name="minuscircleo" color={"orange"} size={size} />),}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
