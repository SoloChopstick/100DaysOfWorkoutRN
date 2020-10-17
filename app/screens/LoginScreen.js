import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
function LoginScreen({}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/favicon.png")} />
      <AppTextInput
        icon="email"
        placeholder="Username"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAdress"
        onChangeText={(text) => setUsername(text)}
      ></AppTextInput>
      <AppTextInput
        icon="lock"
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      ></AppTextInput>
      <AppButton
        title="login"
        onPress={() => console.log(username, password)}
      ></AppButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
});
export default LoginScreen;
