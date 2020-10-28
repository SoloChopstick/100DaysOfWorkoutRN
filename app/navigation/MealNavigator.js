import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MealAddScreen from "../screens/MealAddScreen";
import MealEditScreen from "../screens/MealEditScreen";
import defaultStyles from "../config/styles";

const Stack = createStackNavigator();
export const MealNavigator = () => (
  <Stack.Navigator
    initialRouteName="MealAddScreen"
    screenOptions={{
      headerStyle: { backgroundColor: defaultStyles.colors.primary },
      headerTintColor: defaultStyles.colors.white,
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

export default MealNavigator;
