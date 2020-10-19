import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";

function PickerItem({ item, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={[styles.text, style]}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: { paddingTop: 5 },
});
export default PickerItem;
