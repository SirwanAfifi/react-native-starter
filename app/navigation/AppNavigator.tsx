import React from "react";
import { Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MyStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "dodgerblue",
          },
          headerTintColor: "white",
        }}
      >
        <MyStack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerTitle: "لیست محصولات",
            headerLeft: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <MyStack.Screen name="Category" component={CategoryMealsScreen} />
        <MyStack.Screen name="Favorites" component={FavoritesScreen} />
        <MyStack.Screen name="Filters" component={FiltersScreen} />
        <MyStack.Screen name="MealDetail" component={MealDetailScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
