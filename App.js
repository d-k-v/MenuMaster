import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Menu from "./src/screens/Menu";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "MenuMaster" }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "HOME" }}
        />
        <Stack.Screen
          name="menu"
          component={Menu}
          options={{ title: "MENU" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
