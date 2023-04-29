import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const HomeButton = (props) => {
  return (
    <TouchableOpacity style={buttonStyle.container} onPress={props.onClick}>
      <View>
        <Text style={buttonStyle.text}>{props.text || "Menu"}</Text>
      </View>
    </TouchableOpacity>
  );
};
const buttonStyle = StyleSheet.create({
  container: {
    width: "40%",
    maxWidth: 300,
    aspectRatio: 1 / 1,
    backgroundColor: "#FCC8D1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    //@ts-ignore
    cursor: "pointer",
    margin: 10,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "bold",
    // fontFamily: "Roboto , .sans-sarif",
    // fontSize: ,
    overflow: "hidden",
    color: "#D14D72",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 9,
  },
});
export default HomeButton;
