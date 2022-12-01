import {View, Text, StyleSheet} from 'react-native';

export default function TabBarLable({lable, children, badge}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 20}}>{lable}</Text>
      </View>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
