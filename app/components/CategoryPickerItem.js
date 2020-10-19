import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "./AppText";

import Icon from "./Icon";
import PickerItem from "./PickerItem";

function CategoryPickerItem({ item, onPress, iconFamily }) {
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
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: "33%",
  },
  label: {
    textAlign: "center",
  },
});

export default CategoryPickerItem;
