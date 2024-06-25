import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useFonts } from "expo-font";

const Profile = () => {
  const [fontsLoaded] = useFonts({
    "Metro-Bold": require("../assets/fonts/Metropolis-Bold.otf"),
    "Metro-Thin": require("../assets/fonts/Metropolis-Thin.otf"),
    "Metro-Medium": require("../assets/fonts/Metropolis-Medium.otf"),
    "Metro-Semibold": require("../assets/fonts/Metropolis-SemiBold.otf"),
    "Metro-Black": require("../assets/fonts/Metropolis-Black.otf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "orange", paddingHorizontal: 20 }}>
      <ScrollView>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginTop: 40,
            marginBottom: 20,
            fontFamily: "Metro-Black",
          }}
        >
          My profile
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Image
            source={require("../assets/Senna.jpg")}
            style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "Metro-Bold",
              }}
            >
              Ayrton Senna
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "rgba(255, 255, 255, 0.6)",
                fontFamily: "Metro-Thin",
              }}
            >
              Ayrton.Senna@gmail.com
            </Text>
          </View>
        </View>
        <View style={{ borderTopWidth: 1, borderTopColor: "black" }}>
          <ProfileMenuItem title="My orders" subtitle="Already have 12 orders" />
          <ProfileMenuItem title="Shipping addresses" subtitle="3 addresses" />
          <ProfileMenuItem title="Payment methods" subtitle="Visa **34" />
          <ProfileMenuItem title="Promocodes" subtitle="You have special promocodes" />
          <ProfileMenuItem title="My reviews" subtitle="Reviews for 4 items" />
          <ProfileMenuItem title="Settings" subtitle="Notifications, password" />
        </View>
      </ScrollView>
    </View>
  );
};

const ProfileMenuItem = ({ title, subtitle }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "black",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            fontFamily: "Metro-Semibold",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.6)",
            fontFamily: "Metro-Thin",
          }}
        >
          {subtitle}
        </Text>
      </View>
      <Text style={{ fontSize: 18, color: "rgba(255, 255, 255,)" }}>›</Text>
    </TouchableOpacity>
  );
};

export default Profile;
