import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
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
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = EStyleSheet.create({
  header: {
    width: "380rem",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    right: "15rem",
  },

  headerText: {
    fontSize: 20,
    color: "#444",
    fontFamily: "nunito-bold",
    left: "15rem",
  },
  icon: {
    position: "absolute",
    left: "20rem",
  },
  headerImage: {
    width: "21rem",
    height: "21rem",
    marginHorizontal: "-5rem",
    top: "4rem",
  },
  headerTitle: {
    flexDirection: "row",
    right: "15rem",
  },
});
