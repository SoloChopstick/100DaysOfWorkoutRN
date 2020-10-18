import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().email().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({}) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/favicon.png")} />
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Username"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("username")}
            ></AppTextInput>
            <ErrorMessage error={errors.username} />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
            ></AppTextInput>
            <ErrorMessage error={errors.password}></ErrorMessage>
            <AppButton title="login" onPress={handleSubmit}></AppButton>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: "center",
  },
});
export default LoginScreen;
