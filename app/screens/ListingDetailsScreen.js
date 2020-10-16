import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
function ListingDetailsScreen({
  title,
  subTitle,
  quantity,
  image,
  sellerName,
  sellerImage,
  sellerRatings,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View>
        <AppText style={styles.title}> {title} </AppText>
        <AppText style={styles.subTitle}>{`${quantity} x ${subTitle}`}</AppText>
      </View>
      <View style={styles.sellerContainer}>
        <Image style={styles.sellerImage} source={sellerImage}></Image>
        <View>
          <AppText style={styles.title}> {sellerName} </AppText>
          <AppText style={styles.subTitle}> {sellerRatings} </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  sellerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  title: {
    padding: 10,
    fontWeight: "bold",
  },
  subTitle: {
    padding: 10,
  },
  sellerContainer: {
    padding: 25,
    flex: 1,
    flexDirection: "row",
  },
});

export default ListingDetailsScreen;
