import React from "react";
import { Text } from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

/*
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
*/
export default AppText;
