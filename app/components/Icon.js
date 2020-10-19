import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function Icon({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
  iconFamily = "FontAwesome5",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {iconFamily === "FontAwesome5" ? (
        <FontAwesome5 name={name} color={iconColor} size={size * 0.5} />
      ) : (
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 50,
  },
});

export default Icon;
