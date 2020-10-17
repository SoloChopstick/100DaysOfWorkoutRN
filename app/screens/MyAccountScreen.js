import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { Header } from "react-native/Libraries/NewAppScreen";
import { FlatList } from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "../components/Icon";

const data = [
  { name: "My Listings" },
  {
    name: "My Account",
  },
];
function MyAccountScreen(props) {
  return (
    <Screen>
      <View style={styles.header}>
        <ListItem
          title="Han Solo"
          description="hanw.xie@gmai.com"
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <Icon
        name="format-list-bulleted"
        backgroundColor={colors.primary}
        color={colors.white}
        size={35}
      ></Icon>
      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.name.toString()}
          renderItem={({ item }) => (
            <ListItem title={item.name} image={require("../assets/mosh.jpg")}>
              {" "}
            </ListItem>
          )}
        ></FlatList>
      </View>
      <View style={styles.footer}>
        <ListItem
          title="Log Out"
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  header: {
    marginBottom: 25,
    backgroundColor: colors.light,
  },
  list: {
    marginBottom: 25,
    backgroundColor: colors.light,
  },
  footer: {
    backgroundColor: colors.light,
  },
});
export default MyAccountScreen;
