import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({});
function MealEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          meal: "",
          category: "",
          calories: "",
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="meal" placeholder="Meal" />
        <AppFormField name="meal" placeholder="Category" />
        <AppFormField name="meal" placeholder="Calories" />
        <AppFormField name="meal" placeholder="Description" />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MealEditScreen;
