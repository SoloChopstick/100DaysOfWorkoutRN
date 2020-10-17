import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable"
function ListItem({ title, description, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image}></Image>
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}> {title} </AppText>
            <AppText style={styles.description}> {description} </AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
    marginRight: 10,
  },
  title: { fontWeight: "bold" },
  description: { color: colors.medium },
  detailsContainer: {},
});
export default ListItem;
