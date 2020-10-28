import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppText from "../components/AppText";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

import routes from "../navigation/routes";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

const menuItems = [
  {
    title: "My Messages",
    icon: {
      name: "list",
      backgroundColor: "#4b7bec",
    },
    targetScreen: routes.MESSAGES,
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
      backgroundColor: "#fd9644",
    },
  },
  {
    title: "Delete Account",
    icon: {
      name: "trash-alt",
      backgroundColor: "#fc5c65",
    },
  },
];

function MyAccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Han Solo"
          description="hanw.xie@gmail.com"
          image={require("../assets/Han.jpg")}
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
              onPress={() => navigation.navigate(item.targetScreen)}
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
          IconComponent={
            <Icon
              iconFamily="MaterialCommunityIcons"
              name="logout"
              backgroundColor="#ffe66d"
            />
          }
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
