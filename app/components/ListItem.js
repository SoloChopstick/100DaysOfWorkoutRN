import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {title} </AppText>
        <AppText style={styles.subTitle}> {subTitle} </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
    marginRight: 10,
  },
  title: { fontWeight: "bold" },
  subTitle: { color: colors.medium },
  detailsContainer: {},
});
export default ListItem;
