import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import store from '../../store/store';

export default function NotificationTop() {
  return (
    <View style={styles.container}>
      {/* Top Tab */}
      <TouchableOpacity
        onPress={() => {
          store.putValue(1);
        }}>
        <Text style={{fontSize: 30}}>Click</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
