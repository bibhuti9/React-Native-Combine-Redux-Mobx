import {Image, View} from 'react-native';

import HeaderC from '../components/commonComponent/Header/HeaderC';
import IconC from '../components/commonComponent/Icon/IconC';

import {menu, shoppingCart} from '../theme/icon';
import {useNavigation} from '@react-navigation/native';
import TopTabStack from '../Navigators/TopTabBar/TopTabStack';
import {commonStyle} from '../theme/color';
import Baedge from '../components/commonComponent/Badge/Baedge';
import {observer} from 'mobx-react';

function HomeScreen() {
  const navigation = useNavigation();
  observer(
    (AddToCart = () => {
      return (
        <View>
          <Image source={shoppingCart} style={{...commonStyle.iconStyle}} />
          <Baedge badgeT={2} />
        </View>
      );
    }),
  );

  return (
    <View style={{flex: 1, opacity: 1}}>
      <HeaderC
        leftIcon={<IconC source={menu} />}
        leftIconPress={() => navigation.openDrawer()}
        rightIcon={<AddToCart />}
      />
      <TopTabStack />
    </View>
  );
}
export default observer(HomeScreen);
