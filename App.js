import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Accordtion from './src/Home/Accordtion';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavigators from './src/Navigators/StackNavigators';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StackNavigators" component={StackNavigators} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
