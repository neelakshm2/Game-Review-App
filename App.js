import React from "react";
import { useFonts } from "expo-font";
import MyDrawer from "./routes/drawer";

export default function App() {
  const [loaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  if (loaded) {
    return <MyDrawer />;
  }
}
