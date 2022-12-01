import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../../../theme/color';
import {screens} from '../../../screens/Index';
import Icon from 'react-native-vector-icons/Ionicons';
export default function BodyDwawer({state, navigation}) {
  return (
    <View style={styles.container}>
      {screens.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.canPreventDefault) {
            navigation.navigate({name: route.name, menubar: true});
          }
        };
        return (
          <TouchableOpacity
            onPress={onPress}
            key={String(index)}
            style={[
              styles.bodyButton,
              {backgroundColor: isFocused ? COLORS.primary : COLORS.white},
            ]}>
            <Icon
              name={`${route.icon}${isFocused ? '-outline' : ''}`}
              style={[
                styles.iconStyle,
                {color: isFocused ? COLORS.white : COLORS.black},
              ]}
            />
            <Text style={{color: isFocused ? COLORS.white : COLORS.black}}>
              {route.lable}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: COLORS.white,
  },
  iconStyle: {
    fontSize: 30,
    marginHorizontal: SIZES.margin,
  },
  bodyButton: {
    marginVertical: SIZES.margin - 5,
    marginHorizontal: SIZES.margin,
    padding: SIZES.padding - 2,
    borderRadius: SIZES.radious,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
