import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Card from "../components/Card";
import Screen from "../components/Screen";

import defaultStyle from "../config/styles";
const workouts = [
  {
    title: "Push",
    subTitle: "Bench Press | Incline Press | Dips ",
    image: require("../assets/benchpress.jpg"),
  },
  {
    title: "Pull",
    subTitle: "Barbell Row | Barbell Curl | Pull Ups",
    quantity: 1,
    image: require("../assets/row.jpg"),
  },
  {
    title: "Legs",
    subTitle: "Squat | Deadlift | Lunges",
    quantity: 1,
    image: require("../assets/squat.jpg"),
  },
  {
    title: "Core",
    subTitle: "Crunches | Russian Twists | Mountain Climbers",
    quantity: 1,
    image: require("../assets/core.jpg"),
  },
];

const Stack = createStackNavigator();
export const WorkoutsNavigator = () => (
  <Stack.Navigator
    initialRouteName="WorkoutsScreen"
    screenOptions={{
      headerStyle: { backgroundColor: defaultStyle.colors.primary },
      headerTintColor: defaultStyle.colors.white,
      headerShown: true,
      headerTitleAlign: "center",
      title: "100DaysOfWorkout",
    }}
  >
    <Stack.Screen
      name="WorkoutScreen"
      component={WorkoutsScreen}
      options={{
        title: "Workouts",
      }}
    />
  </Stack.Navigator>
);
function WorkoutsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={workouts}
        keyExtractor={(workout) => workout.title}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            quantity={item.quantity}
            image={item.image}
          />
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default WorkoutsScreen;
