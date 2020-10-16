import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import styles from "./styles";
function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

export default AppText;
