import {StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';

export default function BlurC() {
  return <BlurView blurRadius={20} style={StyleSheet.absoluteFill} />;
}
