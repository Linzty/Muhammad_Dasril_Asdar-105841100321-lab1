import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
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
