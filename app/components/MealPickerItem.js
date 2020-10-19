import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "./AppText";

import Icon from "./Icon";
import PickerItem from "./PickerItem";

function MealPickerItem({ item, onPress, iconFamily }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        backgroundColor={item.icon.backgroundColor}
        name={item.icon.name}
        onPress={onPress}
        size={80}
        iconFamily={iconFamily}
      />
      <PickerItem style={styles.label} item={item} onPress={onPress} />
    </TouchableOpacity>
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
    marginLeft: 15,
    textAlign: "center",
  },
});

export default MealPickerItem;
