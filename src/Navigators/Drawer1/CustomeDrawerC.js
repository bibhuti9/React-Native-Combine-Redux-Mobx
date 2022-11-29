import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../theme/color';

export default function CustomeDrawerC({state, descriptors, navigation}) {
  navigation.openDrawer();
  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity style={{backgroundColor: COLORS.warning, flex: 2}}>
        <Text>Top</Text>
      </TouchableOpacity>
      <View style={{flex: 8, backgroundColor: COLORS.grey1}}></View>
      <TouchableOpacity style={{backgroundColor: COLORS.success, flex: 1}}>
        <Text>Bottom</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
});
