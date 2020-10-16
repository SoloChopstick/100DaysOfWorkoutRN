import React from "react";
import { Button, StyleSheet } from "react-native";

import colors from "../../config/colors";

const Button = () => {
  return <Button style={styles.button}></Button>;
};

const styles = StyleSheet.create({
  button: {
    elevation: 50,
    color: colors.primary,
    borderRadius: 50,
  },
});
export default Button;
