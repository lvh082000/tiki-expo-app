import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProductDetailScreen from "./src/screens/ProductDetail"; // Import the new screen

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const ProductDetailStack = createStackNavigator(); // Create a new StackNavigator for ProductDetailScreen

const ProductDetailStackScreen = () => {
  return (
    <ProductDetailStack.Navigator>
      <ProductDetailStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
      {/* Add other screens here if needed */}
    </ProductDetailStack.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="ProductDetail" // Set the screen name for ProductDetailScreen
        component={ProductDetailStackScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: () => {
            return <></>;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: () => {
            return <></>;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Cá nhân",
          tabBarIcon: () => {
            return <></>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = (email, password) => {
    // if (email === "admin@gmail.com" && password === "123123")
    setUserLoggedIn(true);
  };
  return (
    <NavigationContainer>
      {userLoggedIn ? (
        <MainStackScreen />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
};

export default App;
