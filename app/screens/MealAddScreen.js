import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Screen } from "react-native-screens";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Yup from "yup";
import * as Location from "expo-location";

import AppPicker from "../components/AppPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import MealPickerItem from "../components/MealPickerItem";
import { Form, FormField, SubmitButton } from "../components/forms";

import defaultStyle from "../config/styles";

import MealEditScreen from "./MealEditScreen";

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

const validationSchema = Yup.object().shape({
  mealType: Yup.string().required(),
  category: Yup.object().required().nullable(),
  calories: Yup.number().required().min(1).label("Calories"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const Stack = createStackNavigator();
export const MealNavigator = () => (
  <Stack.Navigator
    initialRouteName="MealAddScreen"
    screenOptions={{
      headerStyle: { backgroundColor: defaultStyle.colors.primary },
      headerTintColor: defaultStyle.colors.white,
      headerShown: true,
      headerTitleAlign: "center",
      title: "100DaysOfWorkout",
    }}
  >
    <Stack.Screen
      name="MealAddScreen"
      component={MealAddScreen}
      options={{
        title: "Add a meal",
      }}
    />
    <Stack.Screen
      name="MealEditScreen"
      component={MealEditScreen}
      options={{
        title: "Edit a meal",
      }}
    />
  </Stack.Navigator>
);

function MealAddScreen(props) {
  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    //result.coords.latitude
    setLocation({ latitude, longitude });
  };
  useEffect(() => {
    getLocation();
  }, []);
  const [mealType, setMealType] = useState();
  const [category, setCategories] = useState();
  const [location, setLocation] = useState();

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

      <Form
        initialValues={{
          calories: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField name="calories" placeholder="Calories" />
        <FormField name="description" placeholder="Description" />
        <FormImagePicker name="images" />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default MealAddScreen;
