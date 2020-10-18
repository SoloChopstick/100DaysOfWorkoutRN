import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { FlatList } from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Account",
    icon: {
      name: "user-alt",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "About",
    icon: {
      name: "info",
      backgroundColor: "blue",
    },
  },
  {
    title: "Delete Account",
    icon: {
      name: "trash-alt",
      backgroundColor: "red",
    },
  },
];

function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Han Solo"
          description="hanw.xie@gmail.com"
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              ChevronComponent={
                <Icon
                  name="chevron-right"
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            ></ListItem>
          )}
          ItemSeparatorComponent={ListItemSeparator}
        ></FlatList>
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        ></ListItem>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default MyAccountScreen;
