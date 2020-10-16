import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";
function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: { fontSize: 18, fontFamily: "Roboto" },
    }),
  },
});
export default AppText;
