import {TouchableOpacity} from 'react-native';
import TextC from '../Text/TextC';
import {styles} from './styles';

export default function TouchableOpacityC({
  onPress = () => {},
  style,
  textOptions,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonStyle, {...style}]}>
      <TextC options={textOptions} />
    </TouchableOpacity>
  );
}
