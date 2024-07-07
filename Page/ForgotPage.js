import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");

const ForgotPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Metro-Bold": require("../assets/fonts/Metropolis-Bold.otf"),
    "Metro-Thin": require("../assets/fonts/Metropolis-Thin.otf"),
    "Metro-Medium": require("../assets/fonts/Metropolis-Medium.otf"),
    "Metro-Semibold": require("../assets/fonts/Metropolis-SemiBold.otf"),
    "Metro-Black": require("../assets/fonts/Metropolis-Black.otf"),
  });

  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Email is required!',
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

    Toast.show({
      type: 'info',
      text1: 'Processing',
      text2: 'Redirecting to login page in 3 seconds...',
      autoHide: false,
    });

    let countdown = 3;
    const interval = setInterval(() => {
      countdown -= 1;
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: `Redirecting to login page in ${countdown} seconds...`,
        autoHide: false,
      });

      if (countdown <= 0) {
        clearInterval(interval);
        Toast.hide();
        navigation.navigate("Login");
      }
    }, 1000);
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
      }}
    >
      <View
        style={{
          flex: 1,
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
            marginBottom: -20,
          }}
        />
      </View>

      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 30,
            color: "black",
            textAlign: "left",
            width: "90%",
            fontFamily: "Metro-Black",
          }}
        >
          Forgot Password
        </Text>

        <View
          style={{
            justifyContent: "center",
            marginBottom: 50,
            width: "90%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "black",
              textAlign: "left",
              marginBottom: 10,
              fontFamily: "Metro-Thin",
            }}
          >
            Please, enter your email address.{"\n"}
            You will receive a link to create a new password via email.
          </Text>
          <FormInput 
            placeholder="Email" 
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
            width: "90%",
          }}
        >
          <ButtonComponent backgroundColor="black" text="Send" onPress={onSubmit} />
        </View>
      </View>

      <Toast />
    </View>
  );
};

const ButtonComponent = ({ backgroundColor, text, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        width: "100%",
        height: height * 0.07,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
      }}
      onPress={onPress}
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

const FormInput = ({ placeholder, secureTextEntry, keyboardType, value, onChangeText }) => {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <TextInput
        style={{
          width: "100%",
          height: height * 0.06,
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

export default ForgotPage;
