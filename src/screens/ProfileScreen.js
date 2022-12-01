import {View, SafeAreaView} from 'react-native';
import HeaderC from '../components/commonComponent/Header/HeaderC';
import IconC from '../components/commonComponent/Icon/IconC';
import {leftArrow2, shoppingCart} from '../theme/icon';
import {useNavigation} from '@react-navigation/native';
import TouchableOpacityC from '../components/commonComponent/TouchableOpacity/TouchableOpacityC';
import {restRoot} from '../utilities/navigation';

export default function ProfileScreen({route}) {
  const navigation = useNavigation();
  const onPress = () => {
    restRoot('Home');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <HeaderC
          leftIcon={
            <IconC style={{width: 30, height: 30}} source={leftArrow2} />
          }
          leftIconPress={() => navigation.goBack()}
          rightIcon={<IconC source={shoppingCart} />}
        />
        <View>
          <TouchableOpacityC
            onPress={onPress}
            textOptions={{text: 'Click to back'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
