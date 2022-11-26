import {View, SafeAreaView} from 'react-native';

import HeaderC from '../components/commonComponent/Header/HeaderC';
import IconC from '../components/commonComponent/Icon/IconC';
import TouchableOpacityC from '../components/commonComponent/TouchableOpacity/TouchableOpacityC';

import {menu, user} from '../theme/icon';
import {push} from '../utilities/navigation';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <HeaderC
          leftIcon={<IconC source={menu} />}
          rightIcon={<IconC source={user} />}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacityC
            onPress={() => {
              push('Profile', {name: 'bibhuti'});
            }}
            textOptions={{
              text: 'Go To Profile Screen',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
