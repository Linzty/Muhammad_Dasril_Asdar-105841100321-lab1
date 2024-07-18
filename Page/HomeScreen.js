import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image,  } from "react-native";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetchUserName();
  }, []);

  const fetchUserName = async () => {
    try {
      const storedUserName = await AsyncStorage.getItem("userName");
      if (storedUserName !== null) {
        setUserName(storedUserName);
      }
    } catch (error) {
      console.log("Error retrieving user name:", error.message);
    }
  };

  useEffect(() => {
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
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: 'center' }}>
        Welcome{"\n"}{userName}
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
      <Toast />
    </View>
  );
};

export default HomeScreen;
