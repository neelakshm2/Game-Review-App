import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

export default function Navigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Group
        initialRouteName="GameZone"
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
          name="GameZone"
          component={Home}
          options={{
            headerTitle: () => (
              <Header navigation={navigation} title="GameZone" />
            ),
          }}
        />
        <Stack.Screen name="Review Details" component={ReviewDetails} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
