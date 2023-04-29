import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../utils/styles";
import HomeButton from "../components/home-button";

const Home = ({ navigation }) => {
  console.log("home");

  return (
    <SafeAreaView style={globalStyle.homeContainer}>
      <Image
        style={loginStyle.logo}
        source={require("../../assets/logo.png")}
      />
      {console.log("aa")}

      {/* <Text>Home</Text> */}
      <View style={loginStyle.container}>
        <HomeButton
          text={"Menu"}
          onClick={() => {
            console.log("clicked Menu");
            navigation.navigate("menu");
          }}
        />
        <HomeButton text={"Dashboard"} />
      </View>
      <View style={loginStyle.container}>
        <HomeButton
          text={"Menu"}
          // onClick={() => {
          //   console.log("clicked Menu");
          // }}
        />
        <HomeButton text={"Dashboard"} />
      </View>
    </SafeAreaView>
  );
};

const loginStyle = StyleSheet.create({
  logo: {
    width: 130,
    height: 130,
  },
  input: {
    width: "80%",
    margin: 20,
    backgroundColor: "#FEF2F4",
    padding: 7,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    // backgroundColor: "yellow",
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#D14D72",
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 20,
  },
});

export default Home;
