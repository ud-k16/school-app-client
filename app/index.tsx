// app/Main.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AIChat from "./common/screens/chat";
import Login from "./common/screens/login";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="TimeTable"
      screenOptions={{
        headerShown: false, // Hide header for each screen in the tab
        tabBarActiveTintColor: "tomato", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
      }}
    >
      <Tab.Screen
        name="TimeTable"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timetable" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={AIChat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="book" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AIChat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
