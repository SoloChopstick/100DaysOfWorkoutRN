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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import colors from "./app/config/colors";
export default function App() {
  //console.log(Dimensions.get("screen"));
  //console.log(useDimensions());

  //const orientation = useDeviceOrientation();
  //or
  //const { landscape } = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <MessagesScreen />
      {/*
      <ListingDetailsScreen
        title="Egg"
        subTitle="70 calories"
        quantity="1"
        image={require("./app/assets/jacket.jpg")}
        sellerName="Han"
        sellerImage={require("./app/assets/mosh.jpg")}
        sellerRatings="9.9"
      />
      */}
      {/*
      <Card
        title="Egg"
        subTitle="70 calories"
        quantity="1"
        image={require("./app/assets/jacket.jpg")}
      />
      */}
    </View>
    //<ViewImageScreen />
    //<WelcomeScreen />
    /*
    <View style={styles.container}>
      <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
      <Text style={styles.textStyles}>
        I love React Native! This is my first React Native app! Here's some more
        text
      </Text>
      <AppText> I Love React Native!</AppText>
      <View style={styles.inside}>
        <View style={styles.insideInside}></View>
      </View>
      <View style={styles.below}></View>
    </View>
    */
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
    backgroundColor: colors.white,
    //padding: 20,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
  },
  inside: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    /*
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 50,
    borderTopWidth: 20,
    borderTopLeftRadius: 50,
    */
    //IOS
    shadowColor: "grey",
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    //ANDROID
    elevation: 50,
    //PADDING
    padding: 20,
    paddingHorizontal: 10,
    paddingLeft: 30,
    margin: 25,
  },
  insideInside: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
    padding: 20,
  },
  below: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    //MARGINS
    margin: 25,
  },
  //CAN ONLY CHANGE in TEXT
  textStyles: {
    fontSize: 30,
    //fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "tomato",
    textTransform: "capitalize",
    textDecorationLine: "underline",
    textAlign: "justify",
    lineHeight: 60,
  },
});
