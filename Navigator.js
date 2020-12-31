import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Home from "./screens/Home";

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
