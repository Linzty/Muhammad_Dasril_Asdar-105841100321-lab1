import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonEx from "./button";
import Title from "./Title";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <View style={styles.logoContainer}>
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
      </View>
      <ButtonEx />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: 100 ,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 250,
    height: 100,
  },
});
