import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HeaderC from '../components/commonComponent/Header/HeaderC';
import IconC from '../components/commonComponent/Icon/IconC';
import {leftArrow, leftArrow2, shoppingCart} from '../theme/icon';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen({route}) {
  console.log(route.params);
  const navigation = useNavigation();
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
      </View>
    </SafeAreaView>
  );
}
