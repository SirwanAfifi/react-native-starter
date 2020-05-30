import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AppNavigator from "./app/navigation/AppNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    Vazir: require("./app/assets/fonts/Vazir.ttf"),
    "Vazir-Bold": require("./app/assets/fonts/Vazir-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({});
