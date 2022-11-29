import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomStack from './BottomStack';
import BottomStackSecond from './BottomStack1/BottomStackSecond';
import BottomStackThird from './BottomStack2/BottomStackThird';
import DrawerFirst from './Drawer1/DrawerFirst';

const Drawer = createDrawerNavigator();
export default function DrawerContainer() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="DrawerFirst">
      <Drawer.Screen name="BottomStack" component={BottomStack} />
      <Drawer.Screen name="BottomStack1" component={BottomStackSecond} />
      <Drawer.Screen name="BottomStackThird" component={BottomStackThird} />
      <Drawer.Screen name="DrawerFirst" component={DrawerFirst} />
    </Drawer.Navigator>
  );
}
