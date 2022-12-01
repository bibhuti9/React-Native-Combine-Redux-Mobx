import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';

import {topScreens} from './index';

const TopTab = createMaterialTopTabNavigator();
export default function TopTabStack() {
  return (
    <TopTab.Navigator>
      {topScreens.map((route, index) => {
        return (
          <TopTab.Screen
            key={String(index)}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </TopTab.Navigator>
  );
}

const styles = StyleSheet.create({});
