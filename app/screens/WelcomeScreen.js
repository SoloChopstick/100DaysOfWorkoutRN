import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

import AppButton from "../components/AppButton";

import colors from "../config/colors";
import defaultStyle from "../config/styles";

/* --- STACK NAVIGATOR --- */
const Stack = createStackNavigator();
export const WelcomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="WelcomeScreen"
    screenOptions={{
      headerStyle: { backgroundColor: defaultStyle.colors.primary },
      headerTintColor: defaultStyle.colors.white,
      headerShown: true,
      headerTitleAlign: "center",
      title: "100DaysOfWorkout",
    }}
  >
    <Stack.Screen
      name="WelcomeScreen"
      options={{ headerShown: false }}
      component={WelcomeScreen}
    />
    <Stack.Screen
      name="LoginScreen"
      options={{
        headerShown: true,
        title: "Log In",
      }}
      component={LoginScreen}
    />
    <Stack.Screen
      name="RegisterScreen"
      options={{
        headerShown: true,
        title: "Create Account",
      }}
      component={RegisterScreen}
    />

    {/*    <Stack.Screen
      component={TweetDetails}
      name="TweetDetails"
      options={({ route }) => ({ title: route.params.id })}
/>*/}
  </Stack.Navigator>
);
/* --- STACK NAVIGATOR --- */

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={1}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <Text style={styles.title}> 100 DAYS OF WORKOUT!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="LOGIN"
          color="primary"
          onPress={() => navigation.navigate("LoginScreen")}
        ></AppButton>
        <AppButton
          title="SIGN UP"
          color="secondary"
          onPress={() => navigation.navigate("RegisterScreen")}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  title: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 20,
  },
  buttonsContainer: { width: "100%", padding: 25 },
});

export default WelcomeScreen;
