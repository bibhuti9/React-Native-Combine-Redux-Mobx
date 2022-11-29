import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS, commonStyle, SIZES} from '../../theme/color';
import {screens} from '../../screens/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function BottomStackThirdC({state, navigation}) {
  const inset = useSafeAreaInsets();
  return (
    <View style={styles.bottomContainer}>
      {screens.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.canPreventDefault) {
            navigation.navigate({name: route.name, merge: true});
          }
        };
        return (
          <TouchableOpacity
            onPress={onPress}
            key={String(index)}
            style={[
              styles.buttonStyle,
              {backgroundColor: isFocused ? 'pink' : 'white'},
            ]}>
            <Icon
              name={`${route.icon}${isFocused ? '' : '-outline'}`}
              style={[
                styles.iconStyle,
                {
                  color: isFocused ? COLORS.secondary : COLORS.black,
                },
              ]}
            />
            <Text style={styles.textStyle}>{route.lable}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: SIZES.margin + 10,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radious,
    ...commonStyle.shadow,
    alignItems: 'center',
    padding: SIZES.padding,
  },
  iconStyle: {
    fontSize: 30,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding - 2,
    flexDirection: 'row',
    borderRadius: SIZES.radious,
  },
  textStyle: {
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});
