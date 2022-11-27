import {StyleSheet} from 'react-native';
import {COLORS, commonStyle, SIZES} from '../../../../theme/color';
export const styles = StyleSheet.create({
  cardDontainer: {
    backgroundColor: COLORS.white,
    ...commonStyle.shadow,
    margin: SIZES.margin,
    padding: SIZES.padding,
    borderRadius: SIZES.radious,
  },
  topCardContainer: {
    flexDirection: 'row',
  },
  cardInfoContainer: {
    flex: 1,
    marginHorizontal: SIZES.margin,
  },
  cardImage: {
    height: 90,
    width: 90,
    borderRadius: SIZES.radious,
  },
  priceAndReviewStyle: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: SIZES.margin,
  },
});
