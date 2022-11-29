import {createDrawerNavigator} from '@react-navigation/drawer';
import {screens} from '../../screens/Index';
import CustomeDrawerC from './CustomeDrawerC';

const Drawer = createDrawerNavigator();
export default function DrawerFirst() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomeDrawerC {...props} />}
      screenOptions={{headerShown: false}}>
      {screens.map((screen, index) => {
        return (
          <Drawer.Screen
            key={String(index)}
            name={screen.name}
            component={screen.component}
            initialParams={{}}
          />
        );
      })}
    </Drawer.Navigator>
  );
}
