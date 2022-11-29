import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import {screens} from '../../../screens/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../../../theme/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function BottomTabRenderC({state, descriptors, navigation}) {
  const inset = useSafeAreaInsets();
  const animatedValue = new Animated.Value(0);
  return (
    <View style={[styles.container, {height: inset.bottom + 50}]}>
      {screens.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          animatedValue.setValue(0);
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,

            useNativeDriver: true,
          }).start();
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };
        const scale = animatedValue.interpolate({
          inputRange: [11, 12],
          outputRange: [0, 1],
        });
        return (
          <TouchableOpacity
            onPressIn={onPress}
            onPressOut={onPress}
            key={String(index)}
            style={styles.bottomTabButton}>
            <Animated.View
              style={
                isFocused && {
                  transform: [{scaleX: scale}],
                  ...styles.bottomTabTop,
                }
              }></Animated.View>
            <Icon
              name={`${route.icon}${isFocused ? '' : '-outline'}`}
              style={[
                styles.bottomTabIcon,
                {color: isFocused ? COLORS.primary : COLORS.black},
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.white,
  },
  bottomTabIcon: {
    fontSize: 30,
  },
  bottomTabButton: {
    padding: SIZES.padding,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomTabTop: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
});
