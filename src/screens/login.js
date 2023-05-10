import { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { login } from "../utils/net";
import { globalStyle } from "../utils/styles";
import { ActivityIndicator } from "react-native-paper";
import { ImageBackground } from "react-native-web";
import { getValue, setValue } from "../utils/store";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    console.log("useEffect");
    setIsLoading(false);
    getValue("login").then((isLoggedIn) => {
      console.log("isLogged in", isLoggedIn);
      if (isLoggedIn === "true") {
        console.log("already logged in");
        navigation.reset({ index: 0, routes: [{ name: "home" }] });
      }
    });
  }, []);
  console.log("ss");
  const handleLogin = () => {
    setErrorMsg("");
    console.log("Handle Login");
    setIsLoading(true);
    login(username, password)
      .then((token) => {
        setIsLoading(false);
        // navigation.navigate("home");
        setValue("login", "true");
        navigation.reset({ index: 0, routes: [{ name: "home" }] });
      })
      .catch((error) => {
        console.log("Login Failed", error);
        setErrorMsg(error);
        setIsLoading(false);
      });
  };
  return (
    <View style={globalStyle.container}>
      <Image
        style={loginStyle.logo}
        source={require("../../assets/logo.png")}
      />
      {console.log("aa")}
      <TextInput
        style={loginStyle.input}
        placeholder="Username"
        value={username}
        onChangeText={(value) => {
          //   console.log(value);
          setUsername(value);
        }}
      />
      <TextInput
        secureTextEntry={true}
        style={loginStyle.input}
        value={password}
        placeholder="Password"
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
      <View style={{ width: "80%", maxWidth: 500 }}>
        <Text style={loginStyle.errorMsg}>{errorMsg}</Text>
      </View>
      <TouchableOpacity
        style={loginStyle.button}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator animating={true} color="white" />
        ) : (
          <Text style={loginStyle.buttonText}>{"LOGIN"}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const loginStyle = StyleSheet.create({
  logo: {
    width: 130,
    height: 130,
  },
  input: {
    width: "80%",
    maxWidth: 500,
    margin: 20,
    backgroundColor: "#FEF2F4",
    padding: 7,
  },
  button: {
    color: "#fff",
    backgroundColor: "#D14D72",
    width: "80%",
    maxWidth: 500,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorMsg: {
    color: "red",
    position: "relative",
    left: 0,
    marginLeft: 10,
  },
});

export default Login;
