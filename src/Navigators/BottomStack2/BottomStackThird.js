import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../../screens/Index';
import BottomStackThirdC from './BottomStackThirdC';

const BottomStack = createBottomTabNavigator();
export default function BottomStackThird() {
  return (
    <BottomStack.Navigator
      tabBar={props => <BottomStackThirdC {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map((screen, index) => {
        return (
          <BottomStack.Screen
            key={String(index)}
            name={screen.name}
            component={screen.component}
            initialParams={{}}
          />
        );
      })}
    </BottomStack.Navigator>
  );
}
