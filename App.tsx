import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [height, setHeight] = useState(0)
  setInterval(() => {
    setHeight(Math.round(Math.random() * 800))
  }, 1000)

  return (
    <View style={styles.container}>
      <View style={styles.itemA}>
          <View style={[styles.bar, {height: height + Math.round(Math.random() * 100), backgroundColor: colors[Math.round(Math.random() * colors.length)]}]}/>        
          <View style={[styles.bar, {height: height + Math.round(Math.random() * 100), backgroundColor: colors[Math.round(Math.random() * colors.length)]}]}/>        
          <View style={[styles.bar, {height: height + Math.round(Math.random() * 100), backgroundColor: colors[Math.round(Math.random() * colors.length)]}]}/>        
          <View style={[styles.bar, {height: height + Math.round(Math.random() * 100), backgroundColor: colors[Math.round(Math.random() * colors.length)]}]}/>        
          <View style={[styles.bar, {height: height + Math.round(Math.random() * 100), backgroundColor: colors[Math.round(Math.random() * colors.length)]}]}/>        
      </View>
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

const colors = ["gold", "tomato", "khaki", "azure", "darkgray", "red", "lightgreen", "black"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemA: {
    backgroundColor: "teal",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    borderBottomColor: "red",
    borderBottomWidth: 2
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
  },
  bar: {
    flex: 1,
    height: 100,
    backgroundColor: "white",
  }
});
