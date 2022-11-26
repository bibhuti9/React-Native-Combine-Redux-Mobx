import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES, textVarient} from '../../../theme/color';

export default function TextC({options}) {
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: options?.FS || textVarient.M,
      fontWeight: options?.FW,
      color: options?.FC || COLORS.black,
      ...options?.style,
    },
  });
  return (
    <Text {...options.props} style={styles.textStyle}>
      {options?.text}
    </Text>
  );
}
