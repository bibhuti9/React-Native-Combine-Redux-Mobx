import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function StatusBarC({
  backgroundColor,
  barStyle = 'dark-content',
}) {
  const inset = useSafeAreaInsets();
  console.log(inset);
  return (
    <View
      style={{
        height: inset.top,
        backgroundColor: backgroundColor,
      }}>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
    </View>
  );
}
