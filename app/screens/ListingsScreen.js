import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    title: "Red Jacket for Sale",
    subTitle: "100$",
    quantity: 1,
    image: require("../assets/jacket.jpg"),
  },
  {
    title: "Poop",
    subTitle: "200$",
    quantity: 1,
    image: require("../assets/jacket.jpg"),
  },
  {
    title: "yolo",
    subTitle: "200$",
    quantity: 1,
    image: require("../assets/jacket.jpg"),
  },
];
function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.title}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            quantity={item.quantity}
            image={item.image}
          />
        )}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
