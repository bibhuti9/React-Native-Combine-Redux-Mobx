import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {screens} from '../../../screens/Index';
import {COLORS, SIZES} from '../../../theme/color';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomTabRenderC({state, descriptors, navigation}) {
  const inset = useSafeAreaInsets();
  const animatedValue = new Animated.Value(1);

  return (
    <View style={{flexDirection: 'row', height: 90}}>
      {screens.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          animatedValue.setValue(0);
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.ease,

            useNativeDriver: true,
          }).start();
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };
        const scale = animatedValue.interpolate({
          inputRange: [10, 11],
          outputRange: [0, 1],
        });

        return (
          <View key={String(index)} style={styles.bottomContainer}>
            <TouchableOpacity
              onPressIn={onPress}
              onPressOut={onPress}
              style={styles.bottomTabButtonStyle}>
              <Animated.View
                style={
                  isFocused && {
                    transform: [{scaleX: scale}],
                    ...styles.bottomTopBar,
                  }
                }></Animated.View>
              <Icon
                name={`${route.icon}${isFocused ? '' : '-outline'}`}
                style={{
                  fontSize: 30,
                  color: isFocused ? COLORS.primary : COLORS.black,
                }}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  bottomTopBar: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 1,
  },
});
