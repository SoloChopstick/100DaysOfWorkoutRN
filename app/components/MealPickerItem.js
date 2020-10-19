import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

import Icon from "./Icon";
import PickerItem from "./PickerItem";

function MealPickerItem({ item, onPress, iconFamily }) {
  return (
    <View style={styles.container}>
      <Icon
        backgroundColor={item.icon.backgroundColor}
        name={item.icon.name}
        onPress={onPress}
        size={80}
        iconFamily={iconFamily}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
  },
  label: {
    marginLeft: 10,
    textAlign: "center",
  },
});

export default MealPickerItem;
