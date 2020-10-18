import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function RegisterScreen(props) {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="firstName"
          autoCorrect={false}
          icon="account"
          placeholder="First Name"
          textContentType="givenName"
        ></AppFormField>

        <AppFormField
          name="lastName"
          autoCorrect={false}
          icon="account"
          placeholder="Last Name"
          textContentType="familyName"
        ></AppFormField>

        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        ></AppFormField>

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        ></AppFormField>

        <AppFormField
          name="passwordConfirmation"
          autoCapitalize="none"
          autoCorrect={false}
          icon="check"
          placeholder="Confirm Password"
          secureTextEntry={true}
          textContentType="password"
        ></AppFormField>
        <SubmitButton title="Register" />
      </AppForm>
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
  name: {
    flexDirection: "row",
  },
});

export default RegisterScreen;
