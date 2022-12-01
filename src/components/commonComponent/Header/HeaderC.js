import {View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {SIZES} from '../../../theme/color';

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
      <Button
        icon={rightIcon}
        style={{marginHorizontal: SIZES.margin + 5}}
        onPress={rightIconPress}
      />
    </View>
  );
}
