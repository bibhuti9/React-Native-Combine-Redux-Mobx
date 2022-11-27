import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../screens/Index';
import BlurC from '../components/commonComponent/Blur/BlurC';
import {Platform} from 'react-native';
import {COLORS} from '../theme/color';
import BottomTabRenderC from '../components/commonComponent/BottomStack/BottomTabRenderC';
const BottomTab = createBottomTabNavigator();
export default function BottomStack() {
  return (
    <BottomTab.Navigator
      tabBar={props => <BottomTabRenderC {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#dede0b',
        },
        tabBarLabelStyle: {color: COLORS.black},
        tabBarBackground: () => (Platform.OS === 'ios' ? <BlurC /> : null),
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
