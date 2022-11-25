import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES} from '../theme/color';
import React, {useRef, useState} from 'react';

export default function AccordtionC({children, onLayout}) {
  const animate = useRef(new Animated.Value(0)).current;
  const [expand, setExpand] = useState();
  const expandStyle = () => {
    Animated.timing(animate, {
      duration: 200,
      toValue: expand ? 200 : 0,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setExpand(!expand);
          expandStyle();
        }}
        style={styles.buttonStyle}>
        <Text>Expand</Text>
      </TouchableOpacity>
      <Animated.View onLayout={onLayout} style={{height: animate}}>
        {children}
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonStyle: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    padding: SIZES.padding,
  },
});
