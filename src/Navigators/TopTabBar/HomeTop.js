import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, textVarient} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import Baedge from '../../components/commonComponent/Badge/Baedge';
import {shoppingCart} from '../../theme/icon';
import CardC from '../../components/commonComponent/Card/CardC';
import {menus} from '../../data/dummyData';
import {observer} from 'mobx-react';
import store from '../../store/store';
function HomeTop({route}) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      tabBarLabel: () => (
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={shoppingCart} style={{width: 30, height: 30}} />
            <Text style={{fontSize: textVarient.S}}>Home</Text>
          </View>
          <Baedge badgeT={store.todos.length} />
        </View>
      ),
    });
  }, [store.todos.length]);
  return (
    <View style={{flex: 1}}>
      <CardC data={menus} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default observer(HomeTop);
