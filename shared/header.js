import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";

let entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  header: {
    width: "100rem",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#444",
    fontFamily: "nunito-bold",
  },
  icon: {
    position: "absolute",
    left: 5,
  },
});
