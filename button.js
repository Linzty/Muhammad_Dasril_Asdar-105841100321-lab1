import { StyleSheet, Text, View } from "react-native";
const ButtonEx = () => {
    return (
        
<View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
        marginBottom: 120,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "orange",
          width: 50,
          height: 60,
          borderRadius: 10,
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            lineHeight: 60,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#47C7FC',
          width: 50,
          height: 60,
          borderRadius: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
      >

        <Text
          style={{
            color: "white",
            textAlign: "center",
            lineHeight: 60,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </View>
    </View>
    )
}
export default ButtonEx