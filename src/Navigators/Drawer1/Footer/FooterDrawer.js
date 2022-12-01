import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SIZES, textVarient} from '../../../theme/color';
import Icon from 'react-native-vector-icons/Ionicons';
export default function FooterDrawer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.footerButon}>
        <Icon name="share-social-outline" style={styles.iconStyle} />
        <Text style={{fontSize: textVarient.M}}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButon}>
        <Icon name="log-out-outline" style={styles.iconStyle} />
        <Text style={{fontSize: textVarient.M}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  iconStyle: {
    fontSize: 30,
    marginHorizontal: SIZES.margin - 5,
  },
  footerButon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.padding,
  },
});
