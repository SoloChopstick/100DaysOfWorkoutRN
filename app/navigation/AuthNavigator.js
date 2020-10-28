import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import defaultStyles from "../config/styles";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: defaultStyles.colors.primary },
      headerTintColor: defaultStyles.colors.white,
      headerTitleAlign: "center",
      title: "100DaysOfWorkout",
    }}
  >
    <Stack.Screen
      component={WelcomeScreen}
      options={{ headerShown: false }}
      name={routes.WELCOME}
    />
    <Stack.Screen
      component={LoginScreen}
      options={{
        title: "Log In",
      }}
      name={routes.LOGIN}
    />
    <Stack.Screen
      component={RegisterScreen}
      options={{
        title: "Create Account",
      }}
      name={routes.REGISTER}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

//Can only access navigation directly if it is declared as screen in the Navigator above
//Otherwise, must use navigation hook: const navigation = useNavigation()
//example in children

/*    <Stack.Screen
      component={TweetDetails}
      name="TweetDetails"
      options={({ route }) => ({ title: route.params.id })}
/>*/
