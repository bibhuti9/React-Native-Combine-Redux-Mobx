import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../screens/Index';

const Stack = createStackNavigator();
export default function StackNavigators() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {screens.map((screen, index) => {
        return (
          <Stack.Screen
            key={String(index)}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </Stack.Navigator>
  );
}
