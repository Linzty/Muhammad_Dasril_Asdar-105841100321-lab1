import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetchUserName();
  }, []);

  const fetchUserName = async () => {
    try {
      const userName = await AsyncStorage.getItem("userName");
      if (userName !== null) {
        setUserName(userName);
      }
    } catch (error) {
      console.log("Error retrieving user name:", error.message);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      Toast.show({
        type: 'success',
        text1: 'Welcome',
        text2: `Welcome, ${userName}!`,
      });
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [userName]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{
          width: 300,
          height: 200,
          marginBottom: 20,
        }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Welcome, {userName}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={{
          backgroundColor: "black",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "orange",
            textAlign: "center",
          }}
        >
          Go to Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
