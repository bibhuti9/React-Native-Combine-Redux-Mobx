import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

export default function HeaderC({
  leftIcon,
  leftIconPress = () => {},
  rightIcon,
  rightIconPress = () => {},
  title = '',
}) {
  const Button = ({icon, style, onPress}) => {
    return (
      <TouchableOpacity style={{...style}} onPress={onPress}>
        {icon}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* left */}
      <Button
        style={styles.leftButtonStyle}
        icon={leftIcon}
        onPress={leftIconPress}
      />
      {/* body */}
      {/* right */}
      <Button icon={rightIcon} onPress={rightIconPress} />
    </View>
  );
}
