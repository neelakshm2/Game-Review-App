import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import Card from "../shared/card";
import { ratingImage } from "../styles/global";

export default function ReviewDetails({ route }) {
  const navigation = useNavigation();

  // const { item } = route?.params || {};
  const { title, body, rating } = route.params;
  const ratingInt = parseInt(rating);

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={ratingImage(ratingInt)} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
