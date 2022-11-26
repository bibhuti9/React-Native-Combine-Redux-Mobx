import {StyleSheet} from 'react-native';
import {COLORS, commonStyle, SIZES} from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftButtonStyle: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radious,
    width: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    ...commonStyle.shadow,
  },
});
