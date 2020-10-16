import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
function Cart({ title, subTitle, quantity, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title}> {title} </AppText>
        <AppText style={styles.subTitle}> {quantity + "x" + subTitle} </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 10,
  },
  title: { marginBottom: 7, fontWeight: "bold" },
  subTitle: { fontSize: 15, color: colors.secondary },
});
export default Cart;
