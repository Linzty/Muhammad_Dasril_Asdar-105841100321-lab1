import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text}>Mclaren F1 Team</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Change the background color to black
    alignItems: 'center', 
    justifyContent: 'flex-start', 
  },
  text: {
    color: "orange", 
  },
});
