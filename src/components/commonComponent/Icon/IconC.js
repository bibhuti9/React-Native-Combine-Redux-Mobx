import {View, Text, Image} from 'react-native';
import React from 'react';
import {commonStyle} from '../../../theme/color';
import {menu} from '../../../theme/icon';

export default function IconC({source, style}) {
  return (
    <Image
      source={source}
      style={{
        ...commonStyle.iconStyle,
        ...style,
      }}
    />
  );
}
