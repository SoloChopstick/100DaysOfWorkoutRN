//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  //Only works for IOS
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  //console.log(Dimensions.get("screen"));
  //console.log(useDimensions());

  const orientation = useDeviceOrientation();
  //or
  const { landscape } = useDeviceOrientation();

  return (
    <ViewImageScreen />
    //<WelcomeScreen />
    //The style on the RIGHT always overwrites the style on the LEFT
    /*
    <View
      style={{
        backgroundColor: "fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        //within each line in the cross axis
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        //flexWrap: "wrap",
        //with wrapping enabled, align behaves differently, A LOT OF THINGS DONT WORK WITH WRAP!!!
        //alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
          alignSelf: "flex-start",
          //equivalent to main AXIS weight/height
          flexBasis: 100,
          //fills available space, similar to flex positive, flexShrink similar to flex negative
          //flexGrow: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          height: 100,
          width: 100,
          top: 20,
          position: "absolute",
        }}
      />
      <View style={{ backgroundColor: "tomato", height: 100, width: 100 }} />
      <View style={{ backgroundColor: "grey", height: 100, width: 100 }} />
      <View
        style={{ backgroundColor: "greenyellow", height: 100, width: 100 }}
      />
    </View>
    */
    /*
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: landscape ? "100%" : "30%",
          width: "100%",
        }}
      ></View>
      <Text>Hello React Native!</Text>

      <Image source={require("./assets/icon.png")} />*
      <Image
        //blurRadius={10}
        //fadeDuration={10000}
        source={{
          width: 200,
          height: 300,
          //reiszeMode: "cover",
          uri: "https://picsum.photos/200/300",
        }}
      />
      <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
      <Button
        color="orange"
        title="Click me"
        onPress={() =>
          Alert.alert("My Title", "My message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      {
        //Only work on IOS right now
      }
      <Button
        color="orange"
        title="Click"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
    */
  );
}

const containerStyle = { backgroundColor: "orange" };
//Use this because this will validate the properties we put
//optimization ?
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
