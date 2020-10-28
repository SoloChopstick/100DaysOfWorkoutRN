import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";

import listingsApi from "../api/listings";

function ListingsScreen(props) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) {
      setError(true);
      return;
      //response.problem
    }
    setError(false);
    setListings(response.data);
  };
  useEffect(() => {
    loadListings();
  }, []);
  return (
    <Screen style={styles.screen}>
      {error ? (
        <>
          <AppText> Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      ) : (
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.title}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.subTitle}
              quantity={item.quantity}
              imageUrl={item.images[0].url}
            />
          )}
        ></FlatList>
      )}
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
