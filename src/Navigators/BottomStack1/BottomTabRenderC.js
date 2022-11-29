import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {COLORS, commonStyle, SIZES} from '../../theme/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {screens} from '../../screens/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import {reactLogo} from '../../theme/icon';
export default function BottomTabRenderC({state, descriptors, navigation}) {
  const inset = useSafeAreaInsets();
  const CustomeBottom = ({route, isFocused}) => {
    const animatedValue = new Animated.Value(0);
    const onPress = () => {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    };

    const rotateOut = animatedValue.interpolate({
      inputRange: [1, 2],
      outputRange: ['100deg', '350deg'],
    });
    return (
      <View
        style={{
          top: -30,
          borderRadius: 50,
        }}>
        <TouchableOpacity
          onPressIn={onPress}
          onPressOut={onPress}
          style={styles.customBotton}>
          <Animated.Image
            source={reactLogo}
            style={{width: 30, height: 30, transform: [{rotate: rotateOut}]}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={[styles.bottomContainer]}>
      {screens.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            target: route.key,
            type: 'tabPress',
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };
        return route.key === 'AddProductScreen' ? (
          <CustomeBottom
            key={String(index)}
            route={route}
            isFocused={isFocused}
          />
        ) : (
          <TouchableOpacity
            onPress={onPress}
            key={String(route.key)}
            style={styles.bottomTabButton}>
            <Icon
              name={`${route.icon}${isFocused ? '' : '-outline'}`}
              style={[
                styles.bottomTanIcon,
                {color: isFocused ? COLORS.secondary : COLORS.black},
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: SIZES.margin + 10,
    borderRadius: SIZES.radious,
    ...commonStyle.shadow,
  },
  bottomTabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  bottomTanIcon: {
    fontSize: 30,
  },
  customBotton: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.margin,
    padding: SIZES.padding,
    borderRadius: 50,
    width: 60,
    height: 60,
  },
});
