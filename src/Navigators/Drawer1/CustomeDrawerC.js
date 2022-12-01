import {View, StyleSheet} from 'react-native';
import BodyDwawer from './Body/BodyDwawer';
import FooterDrawer from './Footer/FooterDrawer';
import HeaderDrawer from './Header/HeaderDrawer';

export default function CustomeDrawerC({state, descriptors, navigation}) {
  return (
    <View style={styles.drawerContainer}>
      <HeaderDrawer />
      <BodyDwawer state={state} navigation={navigation} />
      <FooterDrawer />
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
});
