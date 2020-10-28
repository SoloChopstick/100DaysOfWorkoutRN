import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import AuthNavigator from "./AuthNavigator";
import MealNavigator from "./MealNavigator";

import ProfileImage from "../components/ProfileImage";

import ListingsScreen from "../screens/ListingsScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";

import defaultStyles from "../config/styles";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: defaultStyles.colors.primary,
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Home"
      component={AuthNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Today"
      component={ListingsScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="calendar-day" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Add Meal"
      component={MealNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="plus" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Workouts"
      component={WorkoutsScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="dumbbell" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          //<FontAwesome5 name="user-alt" size={size} color={color} />
          <ProfileImage image={require("../assets/Han.jpg")} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
