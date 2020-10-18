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
      blurRadius={1}
      source={{ uri: "https://picsum.photos/500/1000" }}
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
          onPress={() => console.log("LOGIN")}
        ></AppButton>
        <AppButton
          title="SIGN UP"
          color="secondary"
          onPress={() => console.log("SIGNUP")}
        ></AppButton>
        {/*
      <View style={styles.loginButton}></View>
      <View style={styles.signupButton}></View>
      */}
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
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 20,
  },
  buttonsContainer: { width: "100%", padding: 25 },
});

export default WelcomeScreen;
