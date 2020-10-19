import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Screen } from "react-native-screens";

import * as Yup from "yup";

import AppPicker from "../components/AppPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import MealPickerItem from "../components/MealPickerItem";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import defaultStyle from "../config/styles";
const mealTypes = [
  {
    label: "Breakfast",
    value: 1,
    icon: { name: "food-croissant", backgroundColor: "#fd9644" },
  },
  {
    label: "Lunch",
    value: 2,
    icon: { name: "food", backgroundColor: "#fc5c65" },
  },
  {
    label: "Dinner",
    value: 3,
    icon: { name: "food-variant", backgroundColor: "#4b7bec" },
  },
  {
    label: "Snack",
    value: 4,
    icon: { name: "coffee", backgroundColor: "#2bcbba" },
  },
];

const categories = [
  {
    label: "Veggie",
    value: 1,
    icon: { name: "seedling", backgroundColor: "#26de81" },
  },
  {
    label: "Meat",
    value: 2,
    icon: { name: "drumstick-bite", backgroundColor: "#fc5c65" },
  },
  {
    label: "Fish",
    value: 3,
    icon: { name: "fish", backgroundColor: "#4b7bec" },
  },
  {
    label: "Fruits",
    value: 4,
    icon: { name: "lemon", backgroundColor: "#fd9644" },
  },
  {
    label: "Grains",
    value: 5,
    icon: { name: "bread-slice", backgroundColor: "#fed330" },
  },
  {
    label: "Dairy",
    value: 6,
    icon: { name: "cheese", backgroundColor: "#2bcbba" },
  },
  {
    label: "Drinks",
    value: 7,
    icon: { name: "beer", backgroundColor: "#45aaf2" },
  },
  {
    label: "Eggs",
    value: 8,
    icon: { name: "egg", backgroundColor: defaultStyle.colors.danger },
  },
  {
    label: "Other",
    value: 9,
    icon: {
      name: "question-circle",
      backgroundColor: defaultStyle.colors.medium,
    },
  },
];

const validationSchema = Yup.object().shape({});

function AddMealScreen(props) {
  const [mealType, setMealType] = useState();
  const [category, setCategories] = useState();

  return (
    <Screen style={styles.container}>
      <AppPicker
        icon="bars"
        iconFamily="MaterialCommunityIcons"
        items={mealTypes}
        onSelectItem={(item) => setMealType(item)}
        PickerItemComponent={MealPickerItem}
        placeholder="Select a meal"
        selectedItem={mealType}
      ></AppPicker>

      <AppPicker
        icon="bars"
        items={categories}
        numberOfColumns="3"
        onSelectItem={(item) => setCategories(item)}
        PickerItemComponent={CategoryPickerItem}
        placeholder="Select a category"
        selectedItem={category}
      ></AppPicker>

      <AppForm
        initialValues={{
          calories: "",
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="meal" placeholder="Calories" />
        <AppFormField name="meal" placeholder="Description" />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default AddMealScreen;
