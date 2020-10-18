import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";

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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="username"
              placeholder="Username"
              textContentType="emailAddress"
            ></AppFormField>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            ></AppFormField>
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
