import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

const Merch = () => {
  const [fontsLoaded] = useFonts({
    "Metro-Bold": require("../assets/fonts/Metropolis-Bold.otf"),
    "Metro-Thin": require("../assets/fonts/Metropolis-Thin.otf"),
    "Metro-Medium": require("../assets/fonts/Metropolis-Medium.otf"),
    "Metro-Semibold": require("../assets/fonts/Metropolis-SemiBold.otf"),
    "Metro-Black": require("../assets/fonts/Metropolis-Black.otf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "Metro-Bold", fontSize: 24 }}>Merch</Text>
    </View>
  );
};

export default Merch;
