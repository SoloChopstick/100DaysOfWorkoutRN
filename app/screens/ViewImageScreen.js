import React from "react";
import { Image, Platform, StyleSheet, View, StatusBar } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.addButton}></View>
        <View style={styles.deleteButton}></View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: "https://picsum.photos/700/1000",
        }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
  deleteButton: {
    backgroundColor: "#4ecdc4",
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
