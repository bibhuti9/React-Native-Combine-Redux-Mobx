import {StyleSheet, Text, View} from 'react-native';
import {COLORS, textVarient} from '../../../theme/color';

export default function Baedge({
  badgeT = 0,
  badgeC = COLORS.white,
  badgeS = textVarient.S,
  color = COLORS.secondary,
  style,
}) {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: -10,
      right: -20,
      backgroundColor: color,
      borderRadius: 50,
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={{color: badgeC, fontSize: badgeS}}>{badgeT}</Text>
    </View>
  );
}
