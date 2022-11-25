import {View, Text, Image} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddProductScreen from '../screens/AddProductScreen';

const Stack = createStackNavigator();
export default function StackNavigators() {
  return (
    <Stack.Navigator
      screenOptions={{presentation: 'modal', headerShown: false}}>
      <Stack.Screen
        name="Home Screen"
        options={{
          tabBarBadge: 2,
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="Profile Screen" component={ProfileScreen} />
      <Stack.Screen name="Add Product Screen" component={AddProductScreen} />
    </Stack.Navigator>
  );
}
