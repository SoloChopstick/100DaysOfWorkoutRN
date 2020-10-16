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

import AppButton from "../components/AppButton";
import colors from "../config/colors";
function WelcomeScreen(props) {
  /*
  onPress = () => {
    console.log("tapped");
  };
  */
  return (
    <ImageBackground
      style={styles.background}
      source={{ uri: "https://picsum.photos/500/1000" }}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/favicon.png")}
        ></Image>
        <Text style={styles.title}> 100 DAYS OF WORKOUT!</Text>
      </View>
      <AppButton
        title="LOG IN"
        onPress={() => console.log("LOGIN")}
      ></AppButton>
      <AppButton
        title="SIGN UP"
        onPress={() => console.log("yolo")}
      ></AppButton>
      <View style={styles.loginButton}></View>
      <View style={styles.signupButton}></View>
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
  logo: {},
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
  },
  signupButton: {
    width: "100%",
    height: 50,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
