import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function ReviewDetails({ route }) {
  const navigation = useNavigation();

  // const { item } = route?.params || {};
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  );
}
