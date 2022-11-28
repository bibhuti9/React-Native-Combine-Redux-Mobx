import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../screens/Index';
import BottomTabRenderC from '../components/commonComponent/BottomStack/BottomTabRenderC';
const BottomTab = createBottomTabNavigator();
export default function BottomStack() {
  return (
    <BottomTab.Navigator
      tabBar={props => <BottomTabRenderC {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map((screen, index) => {
        return (
          <BottomTab.Screen
            key={String(index)}
            name={screen.name}
            component={screen.component}
            initialParams={{}}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}
