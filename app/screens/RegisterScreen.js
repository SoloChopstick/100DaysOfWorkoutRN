import React from "react";
import { Image, StyleSheet } from "react-native";

import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";
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
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Form
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
        <FormField
          name="firstName"
          autoCorrect={false}
          icon="account"
          placeholder="First Name"
          textContentType="givenName"
        ></FormField>

        <FormField
          name="lastName"
          autoCorrect={false}
          icon="account"
          placeholder="Last Name"
          textContentType="familyName"
        ></FormField>

        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        ></FormField>

        <FormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        ></FormField>

        <FormField
          name="passwordConfirmation"
          autoCapitalize="none"
          autoCorrect={false}
          icon="check"
          placeholder="Confirm Password"
          secureTextEntry={true}
          textContentType="password"
        ></FormField>
        <SubmitButton title="Register" />
      </Form>
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
    alignSelf: "center",
  },
});

export default RegisterScreen;
