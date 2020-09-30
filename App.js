import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import Button from "./src/components/Button";

import { Feather, Entypo, SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#fff",
        },
        activeTintColor: "#1C8BEB",
        inactiveTintColor: "#828486",
      }}
    >
      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          title: "Principal",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Home}
        options={{
          title: "Transações",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ size, color }) => <Button />,
        }}
      />
      <Tab.Screen
        name="Plan"
        component={Home}
        options={{
          title: "Planejamento",
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Home}
        options={{
          title: "Mais",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="dots-three-horizontal" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
