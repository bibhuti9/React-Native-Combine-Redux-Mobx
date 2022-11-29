import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabRenderC from './BottomTabRenderC';
import {screens} from '../../screens/Index';

const BottomStack = createBottomTabNavigator();
export default function BottomStackSecond() {
  return (
    <BottomStack.Navigator
      tabBar={props => <BottomTabRenderC {...props} />}
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
