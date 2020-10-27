import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({});
function MealEditScreen(props) {
  return (
    <Screen>
      <Form
        initialValues={{
          meal: "",
          category: "",
          calories: "",
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField name="meal" placeholder="Meal" />
        <FormField name="meal" placeholder="Category" />
        <FormField name="meal" placeholder="Calories" />
        <FormField name="meal" placeholder="Description" />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MealEditScreen;
