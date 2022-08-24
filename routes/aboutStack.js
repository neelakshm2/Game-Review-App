import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function Navigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: {
            backgroundColor: "#dcdcdc",
            height: 80,
          },
          headerTintColor: "#444",
          headerTitleStyle: {
            fontFamily: "nunito-bold",
          },
        }}
      >
        <Stack.Screen
          name="About GameZone"
          component={About}
          options={{
            headerTitle: () => (
              <Header navigation={navigation} title="About GameZone" />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
