import {View} from 'react-native';

import HeaderC from '../components/commonComponent/Header/HeaderC';
import IconC from '../components/commonComponent/Icon/IconC';
import CardC from '../components/commonComponent/Card/CardC';

import {menu, user} from '../theme/icon';
import {menus} from '../data/dummyData';
import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarBadge: 3,
    });
  }, []);

  return (
    <View style={{flex: 1, opacity: 1}}>
      <HeaderC
        leftIcon={<IconC source={menu} />}
        rightIcon={<IconC source={user} />}
      />
      <View style={{flex: 1}}>
        <CardC data={menus} />
      </View>
    </View>
  );
}
