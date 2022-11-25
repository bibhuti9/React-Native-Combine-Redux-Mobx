import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {textOptions} from './type';
import {COLORS, SIZES, textVarient} from '../../../theme/color';

export default function TextC({
  FS = textVarient.M,
  style,
  FC = COLORS.black,
  FW = textVarient.weight,
  T = 'Click',
}) {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: FS,
      fontWeight: FW,
      color: FC,
      ...style,
    },
  });
  return <Text style={styles.textStyle}>{T}</Text>;
}
