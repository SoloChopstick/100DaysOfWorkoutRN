import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";

function NewMealButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome5 name="plus" color={colors.primary} size={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.primary,
    borderWidth: 15,
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: 15,
  },
});

export default NewMealButton;
