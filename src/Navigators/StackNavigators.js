import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../screens/Index';
import StatusBarC from '../components/commonComponent/StatusBar/StatusBarC';
import {COLORS} from '../theme/color';

const Stack = createStackNavigator();
export default function StackNavigators() {
  return (
    <>
      <StatusBarC backgroundColor={COLORS.primary} />
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
    </>
  );
}
