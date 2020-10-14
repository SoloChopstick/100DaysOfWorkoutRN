import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  Platform,
  StatusBar,
} from "react-native";

function WelcomeScreen(props) {
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
    backgroundColor: "#fc5c65",
  },
  signupButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
