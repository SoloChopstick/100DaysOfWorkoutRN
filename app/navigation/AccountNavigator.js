import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

import defaultStyles from "../config/styles";
import routes from "./routes";
const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: defaultStyles.colors.primary },
      headerTintColor: defaultStyles.colors.white,
      headerTitleAlign: "center",
      title: "100DaysOfWorkout",
    }}
  >
    <Stack.Screen
      name={routes.ACCOUNT}
      component={MyAccountScreen}
      options={{
        title: "My Account",
      }}
    />
    <Stack.Screen
      name={routes.MESSAGES}
      component={MessagesScreen}
      options={{
        title: "My Messages",
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
