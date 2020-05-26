import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemA}></View>
      <View style={styles.itemB}>
        <View style={[styles.box, {
    backgroundColor: colors[Math.round(Math.random() * colors.length)],}]}></View>
        <View style={[styles.box, {
    backgroundColor: colors[Math.round(Math.random() * colors.length)],}]}></View>
        <View style={[styles.box, {
    backgroundColor: colors[Math.round(Math.random() * colors.length)],}]}></View>
      </View>
    </View>
  );
}

const colors = ["gold", "tomato", "khaki", "azure", "darkgray"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemA: {
    backgroundColor: "teal",
    flex: 1
  },
  itemB: {
    borderTopWidth: 2,
    borderTopColor: "white",
    backgroundColor: "steelblue",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.1,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  }
});
